import React from 'react';
import { useState } from 'react';
export const Components = () => {
  const [state, setState] = useState("Merhaba React!");
const TopComponent = () => {
    return (
        <div>
            <MiddleComponent state={state}/>
        </div>
    );
};

const MiddleComponent = ({ state }) => {
    return (
        <div>
            <BottomComponent state={state} />
        </div>
    );
}
const BottomComponent = ({ state }) => {
    return (
        <div>
            <h1>{state}</h1>
        </div>
    );
}
    return (
        <div>
            <TopComponent />
        </div>
    );
}

/*
📘 NEDEN BU ŞEKİLDE İÇ İÇE COMPONENT'LAR YAPIYORUZ?

- React'te component’lar birbirinden bağımsız küçük yapı taşlarıdır.
- "TopComponent", "MiddleComponent" ve "BottomComponent" aslında büyük bir yapının küçük alt parçalarıdır.
- Bu yapıda "state" en üst component’te tanımlanır ve props olarak (yani parametre gibi) alt component’lara aktarılır.
- Amaç: 
  1️⃣ Veriyi yukarıdan aşağıya (parent → child) aktararak component’lar arası düzenli iletişim kurmak.  
  2️⃣ Kodun okunabilirliğini ve yeniden kullanılabilirliğini artırmak.  
  3️⃣ Gerçek uygulamalarda bu yapı sayesinde her katman ayrı bir görevi üstlenebilir (örneğin: layout, içerik, butonlar vs).
*/