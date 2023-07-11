import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then(data => {
      PlantCard(data);
    });
  }, []);
  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
