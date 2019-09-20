import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


const characterApi = "https://rickandmortyapi.com/api/character/"
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(characterApi)
    .then(response => {
      setCharacter(response.data.results);
    })
      .catch(error => {
        setServerError(error.message);
    })
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>{
        character.map(character => {
          return (
            <CharacterCard key={character.id} character={character}/>
          )
        })
      }</h2>
    </section>
  );
}
