import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App.js';
export const ChangeProfile = () => {
// useContext ile AppContext’ten setUsername fonksiyonuna eriştik.
// Böylece global state'i doğrudan güncelleyebiliyoruz.
    const { setUsername } = useContext(AppContext);
// Input’tan gelen yeni kullanıcı adını local state’te tuttuk.
    const [newUsername, setNewUsername] = React.useState("");
    return (
        <div>
        <input onChange={(event) =>{
            setNewUsername(event.target.value);
        }}/>
        <button onClick={()=> setUsername(newUsername)}> Change Username</button>
        </div>
    );
};
