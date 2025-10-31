import React, { use } from "react"
import { useState, useEffect} from "react";
export
const Text =() => {
const [text, setText] = useState("");
// 🔹 showInput → input alanının gösterilip gösterilmediğini kontrol eden state
const [showInput, setShowInput] = useState(false); 

useEffect(() => {
    console.log("Text component mounted");
// Bu genelde temizlik (cleanup) işlemleri içindir.
    return () =>{
    console.log("Text component unmounted");
    };
}, []); // 🔸 Boş dependency array ([]) → sadece ilk yüklemede (mount) ve kapanışta (unmount) çalışır.

return (
    <div>
        <button onClick={()=> setShowInput(!showInput)}>Show Text</button>
        <br/>
        <br/>
        {showInput && (
            <>
        <input
            onChange={(event) => 
                {setText(event.target.value);
            }}
            placeholder="Type something"
            
        />
        <h1>{text}</h1>
        <button onClick={() => setText("")}>Clear</button>
   </>
        )}
    </div>
);
}

//useEffect == React’te fonksiyonel bileşenlerde yan etkileri (side effects) yönetmek için kullanılır.
// side effect == UI dışında gerçekleşen işlemler.
// Örnekler: API çağrısı, timer, localStorage’a veri kaydetme, 
// DOM manipülasyonu, event listener ekleme/temizleme.