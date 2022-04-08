import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
  return (
    <ul className="cards">
      {plants
        .filter(plant =>
          // If search term is empty, return all plants
          searchTerm === ""
            ? plant
            : // If search term is contained in plant name, return the plant
            plant.name.toLowerCase().includes(searchTerm.toLowerCase())
            ? plant
            : null
        )
        .map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
    </ul>
  );
}

export default PlantList;
