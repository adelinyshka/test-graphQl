import { gql  } from "@apollo/client";

export const GET_USER_QUERY = gql`
query user($id: ID!) {
	user(id: $id) {
		id
		username
		email
		address {
		  geo {
			lat
			lng
		  }
		}
	  }
}
`;
//
// export const GET_POST_QUERY = gql`
// query getPost($id: Number!) {
// 	  getPost(id: $id) {
// 		id
// 		title
// 		body
// 	  }
// 	}
// `;
//
// export const GET_USER_POSTS_QUERY = gql`
// query getUserPosts($id: Number!) {
// 	getUserPosts(id: $id) {
// 		posts {
// 		  data {
// 			id
// 			title
// 		  }
// 		}
// 	  }
//   }
// `;
//

