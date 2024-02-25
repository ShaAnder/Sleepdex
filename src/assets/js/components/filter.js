import { useState } from "react";

import { testFilter } from "../testdata/testfilter";

import { Berries } from "./filtercomponents/Berries";

// advanced search
export function Filter() {
  // filter options
  const [filterOptions, setFilterOptions] = useState(testFilter);
  // filter open true / false state

  let berries;

  return (
    <>
      <div className="filter-berries">
        {filterOptions.berries.map((filterOptions) => (
          <Berries filterOptions={filterOptions} key={filterOptions.id} />
        ))}
      </div>
    </>
  );
}
