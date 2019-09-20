import React from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
