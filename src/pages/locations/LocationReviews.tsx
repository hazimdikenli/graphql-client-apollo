import React from 'react';
import AddReview from './AddReview';

type ReviewType = { id: string; comment?: string | null; rating?: number | null };
type Props = { id: string; reviews: ReviewType[] };
function* range(start: number, end: number, step = 1) {
  let state = start;
  while (state < end) {
    yield state;
    state += step;
  }
  return;
}
export default function LocationReviews({ id, reviews }: Props) {
  return (
    <>
      <div>LocationReviews</div>
      {reviews.map((review) => {
        const { id, comment, rating } = review;
        return (
          <div id={id}>
            <span>{rating ? '⭐'.repeat(rating) : 'N/A'}</span>
            <span>{comment ?? ''}</span>
            <hr />
          </div>
        );
      })}
      <AddReview locationId={id} />
    </>
  );
}
