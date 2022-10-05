import React from 'react';

type Props = {
  id: string;
  name: string;
  description: string;
  photo: string;
  selectionHandler: (id: string) => void;
  selected: boolean;
};
export default function LocationSummary({ id, name, photo, selectionHandler }: Props) {
  return (
    <div id={id} onClick={() => selectionHandler(id)}>
      <h4>{name}</h4>
      <img width="120" height="75" alt="location-reference" src={`${photo}`} />
    </div>
  );
}
