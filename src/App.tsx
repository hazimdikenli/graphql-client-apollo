import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import { GetLocationsQuery, GetLocationsQueryVariables } from './gql/graphql';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
const DisplayLocations = () => {
  // const { loading, error, data } = useQuery<{ locations: { id: string; name: string; description: string; photo: string }[] }>(GET_LOCATIONS);
  const { loading, error, data } = useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data!.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img width="400" height="250" alt="location-reference" src={`${photo}`} />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayLocations />
    </div>
  );
}

export default App;
