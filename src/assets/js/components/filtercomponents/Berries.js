import { useState } from "react";

// Berries Container
export function Berries({ filterOptions }) {
  const [activeBerry, setActiveBerry] = useState(false);
  const [selectedBerries, setSelectedBerries] = useState([]);
  function handleToggleBerry() {
    setActiveBerry((activeBerry) => !activeBerry);
    setSelectedBerries(filterOptions.name);
    console.log(selectedBerries);
  }

  // trying to get us to save the berry name in state for filtering
  function handleSelectedBerry() {
    if (!selectedBerries.filter((e) => e.name !== filterOptions.name))
      setSelectedBerries((selectedBerries) => [
        ...selectedBerries,
        filterOptions.name,
      ]);
  }

  return (
    <div className="filter-berries-item">
      <ul className={!activeBerry ? "berries" : "berries-activated"}>
        <img
          value={filterOptions.name}
          onClick={handleToggleBerry}
          src={filterOptions.image}
          width={20}
          height={20}
        />
      </ul>
    </div>
  );
}
