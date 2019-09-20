import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const characterApi = "https://rick-api.herokuapp.com/api/";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [serverError, setServerError] = useState('');
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(characterApi)
      .then(response => {debugger
        const characterRes = response.results;
        setCharacters(characterRes);
      })
      .catch(error => {
        const errorRes = error.message;
        setServerError(errorRes);
      });
  }, []);


  return (
    <section className="character-list grid-view">
      {serverError}
      <h2>
        {characters.map(character => {debugger 
          <CharacterCard key={character} character={character} />;
        })}
      </h2>
    </section>
  );
}
