import React from "react";

function Pet({ pet, onAdoptPet, id }) {
  const adoptPet = (e) => onAdoptPet(e.target.id)
  
  return (
    <div className="card" data-testid="pet" key={id}>
      <div className="content">
        <span className="header">
          {pet.gender === "female" ? '♀' : '♂'}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button id={pet.id} className="ui primary button" onClick={adoptPet} >Adopt pet</button>} 
      </div>
    </div>
  );
}

export default Pet;
