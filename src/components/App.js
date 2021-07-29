import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (optionSel) => {
    setFilters({ type: optionSel })
  }
  
  let fetchUrl

  const onFindPetsClick = () => {
    if(filters.type === "all") {
      fetchUrl = "http://localhost:3001/pets"
    } else {
      fetchUrl = `http://localhost:3001/pets?type=${filters.type}`
    }
    fetch(fetchUrl)
    .then(r => r.json())
    .then(data => {
      setPets(data)
      console.log("onFindPetsClick fetch:", data)
    })
  }

  const onAdoptPet = (id) => {
    const newPets = pets.map((pet) => {
      if (pet.id === id) {
        console.log(pet)
        return {
          ...pet,
          isAdopted: true,
        }
      } else {
        return pet
      }
    })
    // console.log(newPets)
    setPets(newPets)
    //console.log("now pets is'", pets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
