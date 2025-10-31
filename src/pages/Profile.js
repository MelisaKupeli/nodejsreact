import React from 'react';
import { ChangeProfile } from '../components/ChangeProfile.js';
import { useContext } from 'react';
import { AppContext } from '../App.js';
export const Profile = (props) => {
   // Context’ten username ve setUsername değerlerini alıyoruz
  // Artık props kullanmamıza gerek yok çünkü AppContext bunları global sağlıyor
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>Welcome to the Profile Page, <br/>
        User is: {username} 
        <ChangeProfile /></h1>
    </div>
  );
}

