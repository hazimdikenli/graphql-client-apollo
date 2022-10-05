import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { LocationReviewInput, AddReviewMutationVariables, AddReviewMutation } from '../../gql/graphql';
import { GET_LOCATION_DETAILS } from './Location';

type Props = {
  locationId: string;
};

const ADD_REVIEW = gql`
  mutation AddReview($locationReview: LocationReviewInput!) {
    submitReview(locationReview: $locationReview) {
      success
      message
      code
    }
  }
`;

export default function AddReview({ locationId }: Props) {
  const [addReview, { data, loading, error, reset }] = useMutation<AddReviewMutation, AddReviewMutationVariables>(ADD_REVIEW, {
    refetchQueries: [
      // 'GetLocationDetails', <== this works fine
      // needed to pass in the variables for this one
      { query: GET_LOCATION_DETAILS, variables: { locationId } },
    ],
  });
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  if (loading) return <div>{'Submitting...'}</div>;
  if (error) return <div>{`Submission error! ${error.message}`}</div>;
  if (data) {
    console.log('Submit complete:', data);
  }

  const handleSubmit = () => {
    console.log('Submit', {
      locationId,
      comment,
      rating,
    });
    addReview({
      variables: {
        locationReview: {
          locationId,
          comment,
          rating,
        },
      },
    });
  };

  return (
    <>
      <div>Add a review</div>
      <textarea rows={5} cols={80} placeholder="Your comments..." onBlur={(e) => setComment(e.target.value)} />
      {/* <span>{comment}</span> */}
      <input type="number" min={1} max={5} step={1} value={rating} onChange={(e) => setRating(e.target.valueAsNumber)} />
      <button onClick={handleSubmit}>Send your review</button>
    </>
  );
}
