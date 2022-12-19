// import React, { useState, useEffect } from "react";

// export default function App() {

//   //each time we update state variables that app component re renders
//   //you can have as many state vars as you need
//   //you must always initialize with a default value
//   //use state is a react hook

//   const [movieData, setMovieData] = useState({});
//   const [movieTitle, setMovieTitle] = useState("star wars");

//   //useeffect is a react hook
//   //make sure you make your api function call inside of useefect to prevent loops
//   //make sure you set state inside use effect to make a call 
//   useEffect(() => {
//     const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
//     const makeApiCall = async () => {
//       const res = await fetch(movieUrl);
//       const json = await res.json();
//       setMovieData(json);
//     };
//     makeApiCall();
//   }, []);


// return(
//     //anything above the return that changes the state triggers the rerender of the jsx here
// )
  
// }

// has to be an mp4 
