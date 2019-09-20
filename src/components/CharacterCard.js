import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard({ character }) {
  const { image, name, age, species, status, location, origin, episode} = character;
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Age>{age}</Card.Age>
        <Card.Species>{species}</Card.Species>
        <Card.Status>{status}</Card.Status>
      </Card.Content>
      <Card.Content extra>
        <Card.location>{location}</Card.location>
        <Card.origin>{origin}</Card.origin>
        <a>
          <Icon name='user' />
          {episode}
        </a>
      </Card.Content>
    </Card>
  );
}
