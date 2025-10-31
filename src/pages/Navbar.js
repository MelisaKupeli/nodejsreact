import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div>
NAVBAR <br/>
        <Link to="/">Home</Link> | <Link to= "/profile">Profile</Link> | <Link to="/contact">Contact</Link>
        {/* 
        <br/>
        <div style={{display: 'inline', marginBottom: '20px'}}>
          <a href="/">Home | </a>
          <a href="/profile">Profile | </a>
          <a href="/contact">Contact</a>
        </div>            
        */}
    </div>
  );
}