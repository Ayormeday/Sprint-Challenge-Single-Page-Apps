import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const characterApi = "https://rickandmortyapi.com/api/character/";

const SyledDivP = styled.div`
  margin: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [serverError, setServerError] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(characterApi)
      .then(response => {
        const characterRes = response.data.results;
        setCharacters(characterRes);
      })
      .catch(error => {
        setServerError(error.message);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {serverError}
      <h2>Characters:</h2>
      <SyledDivP className="character-list">
        {characters.map(character => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              location={character.location}
            />
          );
        })}
      </SyledDivP>
    </section>
  );
}

// function CharacterDetails(character){
//   const { image, name, age, species, status, location, origin} = character;
//   return (
//     <div className="character-card">
//       <div >
//         <img src={image} />
//         <h2>{name}</h2>
//         <div className="age">
//          {age}
//         </div>
//         <div >
//          <p>{species}</p>
//          <p>{status}</p>
//          <p>{location}</p>
//         </div>
//         <h3>{origin}</h3>

//         {/* {episode ? episode.map(ep => (
//           <div key={ep} className="movie-star">
//             {episode}
//           </div>
//         )) : null} */}
//       </div>
//     </div>
//   );
// }
