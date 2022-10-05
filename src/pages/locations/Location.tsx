import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { GetLocationDetailsQuery, GetLocationDetailsQueryVariables } from '../../gql/graphql';
import LocationReviews from './LocationReviews';

export const GET_LOCATION_DETAILS = gql`
  query GetLocationDetails($locationId: ID!) {
    location(id: $locationId) {
      id
      name
      description
      overallRating
      photo
      reviewsForLocation {
        id
        rating
        comment
      }
    }
  }
`;
type Props = {
  id: string;
};

export default function Location({ id }: Props) {
  const { loading, error, data } = useQuery<GetLocationDetailsQuery, GetLocationDetailsQueryVariables>(GET_LOCATION_DETAILS, { variables: { locationId: id } });
  if (loading) return <Loading />;
  if (error) return <Failure message={error.message} />;
  const { name, description, photo, reviewsForLocation } = data!.location!;
  const reviews = reviewsForLocation
    .filter((f) => f)
    .map((r) => {
      const { id, comment, rating } = r!;
      return { id, comment, rating };
    });

  return (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
      <LocationReviews id={id} reviews={reviews} />
    </div>
  );
}
function Loading() {
  return <div>Loading...</div>;
}
function Failure(props: { message: string }) {
  return <div>Error loading location details...{props.message}</div>;
}
