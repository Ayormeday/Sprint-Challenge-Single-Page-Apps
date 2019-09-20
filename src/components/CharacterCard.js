import React from "react";

export default function CharacterCard({ character }) {
  const { image, name, status, species, gender, location, origin } = character;
  return (
    <div>
      <img src={image} />
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
      Location: {location.name}
      Origin: {origin.name}
    </div>
  );
}
