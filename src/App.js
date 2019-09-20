import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";


const api = "https://rickandmortyapi.com/documentation";
const locationApi = "https://rickandmortyapi.com/api/location/";
const episodeApi = "https://rickandmortyapi.com/api/episode/";

export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
      {/* <TabNav /> */}
    </main>
  );
}
