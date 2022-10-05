/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation AddReview($locationReview: LocationReviewInput!) {\n    submitReview(locationReview: $locationReview) {\n      success\n      message\n      code\n    }\n  }\n": types.AddReviewDocument,
    "\n  query GetLocationDetails($locationId: ID!) {\n    location(id: $locationId) {\n      id\n      name\n      description\n      overallRating\n      photo\n      reviewsForLocation {\n        id\n        rating\n        comment\n      }\n    }\n  }\n": types.GetLocationDetailsDocument,
    "\n  query GetLocations {\n    locations {\n      id\n      name\n      description\n      photo\n    }\n  }\n": types.GetLocationsDocument,
};

export function graphql(source: "\n  mutation AddReview($locationReview: LocationReviewInput!) {\n    submitReview(locationReview: $locationReview) {\n      success\n      message\n      code\n    }\n  }\n"): (typeof documents)["\n  mutation AddReview($locationReview: LocationReviewInput!) {\n    submitReview(locationReview: $locationReview) {\n      success\n      message\n      code\n    }\n  }\n"];
export function graphql(source: "\n  query GetLocationDetails($locationId: ID!) {\n    location(id: $locationId) {\n      id\n      name\n      description\n      overallRating\n      photo\n      reviewsForLocation {\n        id\n        rating\n        comment\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLocationDetails($locationId: ID!) {\n    location(id: $locationId) {\n      id\n      name\n      description\n      overallRating\n      photo\n      reviewsForLocation {\n        id\n        rating\n        comment\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetLocations {\n    locations {\n      id\n      name\n      description\n      photo\n    }\n  }\n"): (typeof documents)["\n  query GetLocations {\n    locations {\n      id\n      name\n      description\n      photo\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;