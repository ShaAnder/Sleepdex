import { Row, Col, Form } from "react-bootstrap";

export function PokemonContainer({ pokemon }) {
  return (
    <tr>
      <td>
        <p className="id">{pokemon.entry}</p>
      </td>
      <td>
        <h5>{pokemon.name}</h5>
      </td>
      <td>
        <img className="pokemon-img" src={pokemon.image} />
      </td>
      <td>
        <p>{pokemon.details.mainSkill}</p>
      </td>

      <td>
        <p>{pokemon.details.sleepStyle}</p>
      </td>
      <td>
        <img src={pokemon.details.berry} width={20} height={20}></img>
      </td>
      <td>
        <img src={pokemon.details?.ingredient1} width={20} height={20}></img>
        <img src={pokemon.details?.ingredient2} width={20} height={20}></img>
        {pokemon.details.ingredient3 ? (
          <img src={pokemon.details?.ingredient3} width={20} height={20}></img>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}
