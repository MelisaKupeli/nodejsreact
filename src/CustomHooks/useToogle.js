import React from "react";
import { useContext, useEffect, useState, } from 'react';

// useToggle: bir şeyi açıp kapatmak (true/false) için özel hook
export const useToggle = (initialValue = false) => {

    //"state" değişkeni şu anda ne durumda olduğunu tutar (true/false), "setState" ise bu durumu güncellemek için kullanılır.
    const [state, setState] = useState(initialValue);

    //toggle fonksiyonu: mevcut değeri tersine çevirir (true → false, false → true)
    const toggle = () => { setState((prev => !prev )); };
  
    // Hook'tan hem "state" hem de "toggle" fonksiyonunu döndürüyoruz, böylece bileşenler bunları kullanabilir.
    return {state, toggle};

}

