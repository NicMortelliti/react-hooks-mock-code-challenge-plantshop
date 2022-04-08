import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
  return (
    <ul className="cards">
      {plants
        .filter(plant => {
          if (searchTerm === "") {
            return plant;
          } else if (
            plant.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return plant;
          }
          return null;
        })
        .map(plant => {
          return <PlantCard key={plant.id} plant={plant} />;
        })}
    </ul>
  );
}

export default PlantList;
