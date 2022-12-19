import React, { useState, useEffect } from "react";


const StarshipCard = ({ name, consumables, passengers, manufacturer }) => {
    console.log(name);
  
// const shipArray = starship.results
// console.log(shipArray)

    return (
        <>
        <div className = "starship">
            
        <h3>Name: {name}</h3>
        <h4>Consumables: {consumables}</h4>
        <h4>Passengers: {passengers}</h4>
        <h4>Manufacturer: {manufacturer}</h4>

        </div>
        </>
      
    )
}

export default StarshipCard;