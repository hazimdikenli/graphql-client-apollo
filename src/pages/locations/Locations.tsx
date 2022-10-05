import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GetLocationsQuery, GetLocationsQueryVariables } from '../../gql/graphql';
import Location from './Location';
import LocationSummary from './LocationSummary';

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
const Locations = () => {
  const { loading, error, data } = useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GET_LOCATIONS);

  const [selectedLocationId, setSelectedLocationId] = React.useState('');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const selectHandler = (id: string) => {
    console.log('selected => ', id);
    setSelectedLocationId(id);
  };
  const selectedLocation = data?.locations.find((f) => f.id === selectedLocationId);

  return (
    <>
      <h2>Locations</h2>
      <div id="location_list">
        {data!.locations.map((location) => (
          <LocationSummary key={location.id} {...location} selected={false} selectionHandler={selectHandler} />
        ))}
      </div>
      {Boolean(selectedLocationId) && selectedLocation && (
        <>
          <span>{selectedLocationId}</span>
          <Location id={selectedLocationId} />
        </>
      )}
    </>
  );
};

export default Locations;
