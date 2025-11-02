import React from "react";
import { Friends } from "./Friends";
import PropTypes from "prop-types";
export const Person = ({name, email, age, isMarried, friends}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Marital Status: {isMarried ? "Married" : "Single"}</p>
      <h3>Friends:</h3>

    </div>
  );
};
Person.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,  
}