import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";


const api = "https://rickandmortyapi.com/documentation";
const characterApi ="https://rickandmortyapi.com/api/character/";
const locationApi = "https://rickandmortyapi.com/api/location/";
const episodeApi = "https://rickandmortyapi.com/api/episode/";

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
    </main>
  );
}
