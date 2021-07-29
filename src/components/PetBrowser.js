import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petArr = pets.map((pet) => <Pet pet={pet} onAdoptPet={onAdoptPet} id={pet.id} />)
  return <div className="ui cards">{petArr}</div>;
}

export default PetBrowser;
