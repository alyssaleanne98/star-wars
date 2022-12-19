import React, { useState, useEffect } from "react";


const StarshipCard = ({ name, consumables, passengers, manufacturer }) => {
    console.log(name);
  
// const shipArray = starship.results
// console.log(shipArray)

    return (
        <>
        <div className = "starship">
            
        <h3>Name: {name}</h3>
        <p>Consumables: {consumables}</p>
        <p>Passengers: {passengers}</p>
        <p>Manufacturer: {manufacturer}</p>

        </div>
        </>
      
    )
}

export default StarshipCard;