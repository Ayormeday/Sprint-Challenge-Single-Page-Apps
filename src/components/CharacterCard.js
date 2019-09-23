// import React from "react";
// import styled from "styled-components";


// export default function CharacterCard({ character }) {
//   const { image, name, status, species, gender, location, origin } = character;
//   return (
//     <div>
//       <img src={image} />
//       <h2>{name}</h2>
//       <p>{status}</p>
//       <p>{species}</p>
//       <p>{gender}</p>
//       Location: {location.name}
//       Origin: {origin.name}
//     </div>
//   );
// }
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styled from "styled-components";

const CardStyled = styled.div `
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 20px 0;
border: 1px solid ;
`

const Container = styled.div`



`

export default function CharacterCard({ character }) {
  const { image, name, status, species, gender, location, origin } = character;
  return (
    <Container>

      <CardStyled>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
        {species}, {status}
          </Card.Meta>
          <Card.Description>
        {gender} 
          </Card.Description>
          <Card.Description>{location.name} {origin.name}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            Episodes
          </a>
        </Card.Content>
      </CardStyled>
    </Container>

  );
}