import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const characterApi = "https://rickandmortyapi.com/api/character/";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [display, setDisplay] = useState([]);
  const [searchString, setSearchString] = useState("");

  // (const [charactertodisplay])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(characterApi)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    setDisplay(characters);
  }, [characters]); 


  return (
    <section className="character-list grid-view">
      <h2>
        {display.map(character => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </h2>
    </section>
  );
}


