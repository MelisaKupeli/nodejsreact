import './App.css';
import React from 'react';
import { Task } from './crud/Task';
import { Text } from './all/Text';
import { Other } from './all/Other';
import { CatFact } from './fetch/CatFact';
import { Users } from './all/Users';
import { PredictAge } from './fetch/PredictAge';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {Contact} from './pages/Contact';
import {Navbar} from './pages/Navbar';
import { Components } from './components/Components';
import { useState , createContext} from 'react';
// Context oluşturduk
// Context, global bir veri alanıdır.
// Böylece username ve setUsername tüm componentlerde doğrudan kullanılabilir.
// Artık props zinciriyle aktarmaya gerek yok!
export const AppContext = createContext();

function App() {
    // → Bu, yerel (local) state yönetimidir.
    // State tanımlandı — global olarak paylaşılacak veri
    //Bu artık "global state management" oluyor. Yani veriyi tek merkezden yönetiyorsun.
const [username, setUsername] = React.useState("Guest");

  return (    
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar/>
        <Routes>
          {/* Home componentine username prop olarak da gönderebiliriz */}
          <Route path="/" element={<Home username={username }/>}/>
          <Route path="/profile" element={<Profile />}/>
           {/* 
              ⛔ Eskiden props ile şöyle gönderiyorduk:
           <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>}/>
              
              ✅ Artık buna gerek yok.
              Çünkü Profile component’i useContext(AppContext) ile doğrudan erişebilir.
              Örneğin Profile içinde:
              const { username, setUsername } = useContext(AppContext);
              diyerek erişilebilir.
            */}
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
      <Components/>
    {/*<PredictAge/>*/}
    {/*<CatFact/>*/}
    {/*<Task/>*/}
    {/*<Text/>*/}
    {/* <Other/>*/}
    {/* <Users/>*/}

    </div>
  );
}

export default App;

/*
🧠 STATE MANAGEMENT ÖZETİ:
1️⃣ useState → Yerel state yönetimidir, sadece tanımlandığı bileşende geçerlidir.
2️⃣ createContext + useContext → Global state yönetimidir.
   Veriyi merkezi bir noktadan paylaşır ve yönetir.
   Bu sayede props drilling (veriyi katman katman aktarma) ortadan kalkar.
*/

