 import { useState } from "react";
 import { User, User2 } from "./Users";
 export
 const Other =() => {
    
 const [age, setAge] = useState(0);
  const isAdult = age >= 18;
  const times = [1,2,3];

  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");

  return (
    <div>
      <button onClick={()=>{alert("HEYYY!!!");}}>Show/Hide Alert</button>
      <button onClick={()=>{setShowText(!showText);}}>Show/Hide Text</button>
      <button onClick={()=>{setTextColor(textColor === "black" ? "blue" : "black");}}>Change Text Color</button>
      <br/>
      {showText === true && <h1 style={{color: textColor}}>Welcome to React App</h1>}
      <br/>
      {age} <button onClick={increaseAge}>Increase Age</button>
      <br/><br/>
      <input type="text" onChange={handleInputChange} />
      {inputValue}

      <p style={{color:'orange', fontWeight:'bold'}}>{isAdult ? "Is adult:" : "Is not adult:"}</p>
     
      {times.map((_, index) =>(
        <div key={index}>
          <User2/>
        </div>
        ))
      }
      
     <div>
        <User name = "Mell" age={15} email="xxdx@gmail.com"/>
        <User name = "Melisa" age={18} email="xxd@gmail.com"/>
     </div>
    </div>
  )
}