import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App.js';
export const Home = (props) => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Welcome to the Home Page and user is : {username}</h1>
    </div>
  );
}