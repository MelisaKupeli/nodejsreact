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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Form } from './components/Form';
import { useToggle , useToggle2} from './CustomHooks/useToogle';

export const AppContext = createContext();

function App() {   
  const {state:isVisible, toggle} = useToggle();

return (    
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Hide Form" : "Show Form"}
      </button>
      
      {isVisible && <h1>Hide Text</h1>}

      {/*<Form/>*/}
    </div>


  );
}


{/*
// 🔹 Context → Global veri alanı (tüm componentlerde paylaşılır)
export const AppContext = createContext();

function App() {
// ⚠️ QueryClient'ı component dışına alıyoruz — her render'da yeniden oluşturulmasın.
  const client = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}});
  // refetchOnWindowFocus: false -> sekme değişince otomatik yeniden fetch yapmaz
  
  // 🔹 Global olarak yönetilecek state
  const [username, setUsername] = React.useState("Guest");

  return (    
    <div className="App">
      <QueryClientProvider client={client}>
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar/>
        <Routes>
        {/* Home'a prop göndermeye gerek yok; Home useContext ile username alabilir 
         Eskiden props ile şöyle gönderiyorduk:
           <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>}/>
          <Route path="/" element={<Home username={username }/>}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
      </QueryClientProvider>
     {/* <Components/>
    {/*<PredictAge/>
    {/*<CatFact/>
    {/*<Task/>
    {/*<Text/>
    {/* <Other/>
    {/* <Users/>

    </div>
  );
}
*/}
export default App;

/*
STATE MANAGEMENT ÖZETİ:
Kısa özet:
- useState: lokal state (sadece tanımlandığı component içinde)
- createContext + useContext: global state (props zinciri olmadan paylaşılır)
- React Query (QueryClient): server-state / API cache yönetimi
*/

