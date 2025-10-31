import Axios from "axios";
import React, { use } from "react"
import { useState, useEffect} from "react";

export
const PredictAge =() => {

const [name, setName] = useState("");
const [predictedAge, setPredictedAge] = useState(null);

const fetchData = () => {
  Axios.get(`https://api.agify.io/?name=${name}`)
    .then((response) => {
      setPredictedAge(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};


return (
    <div>
        <input placeholder="Ex. Mery.." 
            onChange={(event) =>{
            setName(event.target.value);
            }}/>
        <button onClick={fetchData}>Predict Age</button>
        <h1>Name: {predictedAge?.name}</h1>
        <h1>Predicted Age: {predictedAge?.age}</h1>
        <h1>Count: {predictedAge?.count}</h1>
    </div>
)
}