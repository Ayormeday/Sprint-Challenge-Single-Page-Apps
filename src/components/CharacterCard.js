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
padding-left: 1rem;
`

const Container = styled.div`
display:flex;
flex-direction: row;
`
const CardContent = styled.div `
  font-size: 2rem;
`
const CardContentP = styled.div`
font-size: 1.5rem;
`
const CardContentExtra = styled.div `
padding-top: 2rem;
`

export default function CharacterCard({ character }) {
  const { image, name, status, species, gender, location, origin } = character;
  return (
    <Container>

      <CardStyled>
        <Image src={image} wrapped ui={false} />
        <CardContent>
          <Card.Header>{name}</Card.Header>
          <CardContentP>
        {species}, {status}
          </CardContentP>
          <CardContentP>
        {gender} 
          </CardContentP>
          <CardContentP>{location.name} {origin.name}</CardContentP>
        </CardContent>
        <CardContentExtra>
          <a>
            <Icon name='user' />
            Episodes
          </a>
        </CardContentExtra>
      </CardStyled>
    </Container>

  );
}