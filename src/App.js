import React, { useState, useEffect } from "react";
import './App.css';
import StarshipCard from "./components/StarshipCard";


function App() {

  const [shipModel, setShipModel] = useState(null)

  useEffect(() => {
    const shipURL = `https://swapi.dev/api/starships/`;
    const makeApiCall = async () => {
      const res = await fetch(shipURL);
      const json = await res.json();
      setShipModel(json)
      console.log(json)
    };
    makeApiCall();
  }, []);

  // const shipArray = shipModel.results
  // console.log(shipArray)

  const shipNames = shipModel?.results.map((ele, index) => {
    return (
      <div>
        <StarshipCard
          key={index}
          {...ele}
        />
      </div>
    )
  })

  return (
    <div className="App">
      <h1>Star Wars API</h1>
      <h1>{shipNames} </h1> 
    

    </div>
  );
}

export default App