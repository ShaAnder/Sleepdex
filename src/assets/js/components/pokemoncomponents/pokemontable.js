import { Container } from "react-bootstrap";

// Main Pokemon Container

export function PokemonTable({ children }) {
  return (
    <Container>
      <table className="table-header">
        <thead>
          <th>Entry</th>
          <th>Name</th>
          <th>Pokemon</th>
          <th>MainSkill</th>
          <th>Style</th>
          <th>Berry</th>
          <th>Ingredients</th>
        </thead>
      </table>
      <table>
        <tbody className="table-body">{children}</tbody>
      </table>
    </Container>
  );
}
