import "./App.css";
import Home from "./Pages/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphqlzero.almansi.me/api",
  });

  return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
  );
}

export default App;
