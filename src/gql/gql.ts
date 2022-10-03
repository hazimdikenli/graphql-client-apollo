/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetLocations {\n    locations {\n      id\n      name\n      description\n      photo\n    }\n  }\n": types.GetLocationsDocument,
};

export function graphql(source: "\n  query GetLocations {\n    locations {\n      id\n      name\n      description\n      photo\n    }\n  }\n"): (typeof documents)["\n  query GetLocations {\n    locations {\n      id\n      name\n      description\n      photo\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;