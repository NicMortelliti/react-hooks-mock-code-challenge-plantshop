import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsArrayState, setPlantsArrayState] = useState([]);

  const serverUrl = "http://localhost:6001";

  useEffect(() => {
    fetch(`${serverUrl}/plants`)
      .then(results => results.json())
      .then(data => setPlantsArrayState(data));
  }, []);

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plantsArrayState} />
    </main>
  );
}

export default PlantPage;
