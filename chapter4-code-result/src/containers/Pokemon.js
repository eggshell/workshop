import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card from '../components/Card';

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const cardStyle = {
  padding: '20px',
  width: '200px',
  height: '250px',
  border: '1px solid red',
  margin: '20px',
};

class Pokemon extends Component {
  render() {
    return (
      <div style={listStyle}>
        <Query
          query={gql`
          {
            pokemons(first: 100) {
              number
              name
              image
              types
              attacks {
                special {
                  name
                  type
                  damage
                }
              }
            }
          }
        `}
        >
        {({ loading, error, data }) => {
          if (loading) return <p>Your Pokemon are loading...</p>;
          if (error) return <p>Error: {error}</p>;
          return data.pokemons.map((pokemon) => {
            return <Card key={pokemon.name} pokemon={pokemon} styles={cardStyle} />
          });
        }}
      </Query>
    </div>
    );
  }
}

export default Pokemon;
