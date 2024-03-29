import { useState } from "react";

import { testFilter } from "../testdata/testfilter";

import { Berries } from "./filtercomponents/Berries";
import { Ingredients } from "./filtercomponents/Ingredients";

// advanced search
export function Filter() {
  // filter options
  const [filterOptions, setFilterOptions] = useState(testFilter);
  // Berry filter
  const [selectedItems, setSelectedItems] = useState([]);

  let berries;

  return (
    <>
      <div className="filter-berries">
        {filterOptions.berries.map((filterOptions) => (
          <Berries
            selectedBerries={selectedItems}
            setSelectedBerries={setSelectedItems}
            filterOptions={filterOptions}
            key={filterOptions.id}
          />
        ))}
      </div>
      <div className="filter-ingredients">
        {filterOptions.ingredients.map((filterOptions) => (
          <Ingredients
            selectedIngredients={selectedItems}
            setSelectedIngredients={setSelectedItems}
            filterOptions={filterOptions}
            key={filterOptions.id}
          />
        ))}
      </div>
    </>
  );
}
