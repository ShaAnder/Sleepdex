import { useState } from "react";

// Berries Container
export function Berries({
  filterOptions,
  selectedBerries,
  setSelectedBerries,
}) {
  // set our active berry, this is just for css styling to allow the berry to be toggled on or off
  const [activeBerry, setActiveBerry] = useState(false);

  const deleteBerries = (berryName) => {
    setSelectedBerries((selectedBerries) =>
      selectedBerries.filter((selectedName) => {
        return selectedName !== berryName;
      })
    );
  };

  function handleActiveBerry(e) {
    // toggles the berry on or off
    setActiveBerry((activeBerry) => !activeBerry);
    if (!activeBerry) {
      console.log(filterOptions.name);
      setSelectedBerries([...selectedBerries, e]);
    }
    if (activeBerry) {
      deleteBerries(filterOptions.name);
    }
  }

  return (
    <div className="filter-berries-item">
      <ul className={!activeBerry ? "berries" : "berries-activated"}>
        <img
          value={filterOptions.name}
          onClick={() => handleActiveBerry(filterOptions.name)}
          src={filterOptions.image}
          width={20}
          height={20}
        />
      </ul>
    </div>
  );
}
