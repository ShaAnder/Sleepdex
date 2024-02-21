import { PokemonInfo } from "./pokemoninfo";

// Main Pokemon Container
export function PokemonContainer({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img className="pokemon-img" src={pokemon.image} />
      <PokemonInfo pokemon={pokemon} />
    </div>
  );
}
