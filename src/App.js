// react imports
import { useState } from "react";

// test data
import { testPokemon } from "./assets/js/testdata/testpokemon.js";

// helpers

// components
import { NavBar } from "./assets/js/components/navbar";
import { SleepDex } from "./assets/js/components/sleepdex.js";
import { Filter } from "./assets/js/components/filter.js";

function App() {
  const [pokemon, setPokemon] = useState(testPokemon);

  return (
    <div className="App">
      <NavBar />
      <Filter />
      <SleepDex pokemonList={pokemon} setPokemonList={setPokemon} />
      <Footer />
    </div>
  );
}

// Items / Berries / ingredients / skills container
function ItemSkillContainer() {
  return <div></div>;
}
// skill calculator
function Calculator() {
  return <div></div>;
}
// footer
function Footer() {
  return <div></div>;
}

export default App;
