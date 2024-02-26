import { useState } from "react";

import { testFilter } from "../testdata/testfilter";

import { Berries } from "./filtercomponents/Berries";

// advanced search
export function Filter() {
  // filter options
  const [filterOptions, setFilterOptions] = useState(testFilter);
  // Berry filter
  const [selectedBerries, setSelectedBerries] = useState([]);

  let berries;

  return (
    <>
      <div className="filter-berries">
        {filterOptions.berries.map((filterOptions) => (
          <Berries
            selectedBerries={selectedBerries}
            setSelectedBerries={setSelectedBerries}
            filterOptions={filterOptions}
            key={filterOptions.id}
          />
        ))}
      </div>
    </>
  );
}
