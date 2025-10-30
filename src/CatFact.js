import React, { useState, useEffect } from "react";
import Axios from "axios";

export const CatFact = () => {
  const [catFact, setCatFact] = useState("");
  //fetch("https://catfact.ninja/fact")
    //.then((response) => response.json())
    //.then((data) => {
      //console.log(data);
    //});
  const fetchCatFact = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setCatFact(data.fact);
  };
 {/* const getCatFact  = () => {
    Axios.get("https://catfact.ninja/fact")
    .then((response) => {
      setCatFact(response.data.fact);
    });
  };*/}
   useEffect(() => {
    //getCatFact();
    fetchCatFact();
  }, []);

  return (
    <div>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <h2>{catFact}</h2>
    </div>
  );
};