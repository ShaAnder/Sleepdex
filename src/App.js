// react imports
import { useState } from "react";

// test data
import { testPokemon } from "./assets/js/testdata/testpokemon.js";

// helpers

// components
import { NavBar } from "./assets/js/components/navbar";
import { SleepDex } from "./assets/js/components/sleepdex";

function App() {
  const [advancedFilter, setAdvancedFilter] = useState(false);
  const [pokemon, setPokemon] = useState(testPokemon);
  return (
    <div className="App">
      <span>
        <NavBar />
      </span>
      <span>
        {advancedFilter && <AdvancedFilter />}
        <SleepDex pokemonList={pokemon} setPokemonList={setPokemon} />
        <ItemSkillContainer />
        <Calculator />
      </span>
      <span>
        <Footer />
      </span>
    </div>
  );
}

// advanced search
function AdvancedFilter() {
  return (
    <div>
      <ul className="berries"></ul>
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
