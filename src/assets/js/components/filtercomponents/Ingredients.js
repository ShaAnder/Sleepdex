import { useState } from "react";

// Berries Container
export function Ingredients({
  filterOptions,
  selectedIngredients,
  setSelectedIngredients,
}) {
  // set our active ing, this is just for css styling to allow the berry to be toggled on or off
  const [activeIngredient, setActiveIngredient] = useState(false);

  const deleteIngredients = (ingredientName) => {
    setSelectedIngredients((selectedIngredients) =>
      selectedIngredients.filter((selectedName) => {
        return selectedName !== ingredientName;
      })
    );
  };

  function handleActiveIngredient(e) {
    // toggles the ingr on or off
    setActiveIngredient((activeIngredient) => !activeIngredient);
    if (!activeIngredient) {
      console.log(filterOptions.name);
      setSelectedIngredients([...selectedIngredients, e]);
    }
    if (activeIngredient) {
      deleteIngredients(filterOptions.name);
    }
  }

  return (
    <div className="filter-ingredients-item">
      <ul
        className={!activeIngredient ? "ingredients" : "ingredients-activated"}
      >
        <img
          value={filterOptions.name}
          onClick={() => handleActiveIngredient(filterOptions.name)}
          src={filterOptions.image}
          width={20}
          height={20}
        />
      </ul>
    </div>
  );
}
