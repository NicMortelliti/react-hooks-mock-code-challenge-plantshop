import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const serverUrl = "http://localhost:6001";
  const [plantsArrayState, setPlantsArrayState] = useState([]);
  const [searchTermState, setSearchTermState] = useState("");

  function handleNewPlant(e) {
    e.preventDefault();
    const newPlantData = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,
    };

    fetch(`${serverUrl}/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantData),
    })
      .then(r => r.json())
      .then(newPlantFromServer =>
        setPlantsArrayState([...plantsArrayState, newPlantFromServer])
      );
  }

  useEffect(() => {
    fetch(`${serverUrl}/plants`)
      .then(results => results.json())
      .then(data => setPlantsArrayState(data));
  }, []);

  return (
    <main>
      <NewPlantForm newPlantSubmit={handleNewPlant} />
      <Search searchTerm={searchTermState} setSearchTerm={setSearchTermState} />
      <PlantList plants={plantsArrayState} searchTerm={searchTermState} />
    </main>
  );
}

export default PlantPage;
