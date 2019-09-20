import React from "react";
// import { Route } from 'react-router-dom'
import TabNav from "./components/TabNav.js";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from 'react-router-dom';


const api = "https://rickandmortyapi.com/documentation";

const episodeApi = "https://rickandmortyapi.com/api/episode/";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={CharacterList}/>
      {/* <TabNav /> */}
    </main>
  );
}

