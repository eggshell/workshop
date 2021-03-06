import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Pokemon from './containers/Pokemon';

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/graphql"
});


const styles = {
  fontFamily: 'PokemonFireRedRegular',
  color: '#ff5c49',
  textAlign: 'center'
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div style={styles}>
          <h1>My Pokemon App</h1>
          <Pokemon />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
