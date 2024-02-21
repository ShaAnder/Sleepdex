export function PokemonInfo({ pokemon }) {
  return (
    <div className="pokemon-info">
      <p className="id">#{pokemon.entry}</p>
      <h5>{pokemon.name}</h5>
      <div className="abilities"></div>
    </div>
  );
}
