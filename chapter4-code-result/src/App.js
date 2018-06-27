import React, { Component } from 'react';
import Pokemon from './containers/Pokemon';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/graphql"
});


const appStyle = {
  color: 'red',
  textAlign: 'center'
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div style={appStyle}>
          <h1>My Pokemon App</h1>
          <Pokemon />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
