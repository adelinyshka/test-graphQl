import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_QUERY } from "../graphql/Queries";
import './index.css';

function Home() {
	const [userSearched, setUserSearched] = useState(0);
	const [getUser, { data, error }] = useLazyQuery(GET_USER_QUERY, {
		variables: { id: userSearched },
	});

	if (error) return <h1> Error found ${error}</h1>;

	if (data) {
		console.log(data);
	}

	return (
		<div className="home">
			<h1>Search For User</h1>
			<input
				type="text"
				placeholder="Type user id from 1 to 10"
				onChange={(event) => {
					setUserSearched(event.target.value);
				}}
			/>
			<button onClick={() => getUser()}> Search</button>
			<div className="user">
				{data?.user?.id && (
					<>
						<h1> ID: {data.user.id} </h1>
						<h1> Name: {data.user.username} </h1>
						<h1>
							{" "}
							Email: {data.user.email}
						</h1>
					</>
				)}
			</div>
		</div>
	);
}

export default Home;
