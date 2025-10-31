// 🔹 React'ten useState hook'unu import ediyoruz.
// useState, bileşen içinde veriyi (durumu) saklamamızı ve değiştirmemizi sağlar.
import { useState } from "react";

// 🔹 Functional component (fonksiyonel bileşen) tanımlıyoruz.
export const Other = () => {

  // 🔹 Yaş bilgisini tutmak için state tanımlıyoruz.
  // age: mevcut yaş değeri
  // setAge: yaşı değiştiren fonksiyon
  const [age, setAge] = useState(0);

  // 🔹 Kullanıcının yetişkin olup olmadığını kontrol eden değişken.
  const isAdult = age >= 18;

  // 🔹 Butona tıklanınca yaş değerini 1 artıran fonksiyon.
  const increaseAge = () => {
    setAge(age + 1);  // state'i 1 artırır
    console.log(age); // (Not: console.log anlık olarak eski değeri gösterebilir çünkü state async güncellenir)
  };

  // 🔹 Input değerini tutan bir state tanımlıyoruz.
  const [inputValue, setInputValue] = useState("");

  // 🔹 Input alanındaki değişikliği yakalayan event fonksiyonu.
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // input'a yazılan değeri state'e kaydeder
  };

  // 🔹 Metnin görünür olup olmadığını kontrol eden state
  const [showText, setShowText] = useState(true);

  // 🔹 Metnin rengini kontrol eden state
  const [textColor, setTextColor] = useState("black");

  // 🔹 Bileşenin JSX (UI) kısmı:
  return (
    <div>
      {/* 🔹 1. Buton: ekrana alert çıkarır */}
      <button onClick={() => { alert("HEYYY!!!"); }}>Show/Hide Alert</button>

      {/* 🔹 2. Buton: metni gizle/göster toggle eder */}
      <button onClick={() => { setShowText(!showText); }}>Show/Hide Text</button>

      {/* 🔹 3. Buton: metin rengini siyah ↔ mavi arasında değiştirir */}
      <button onClick={() => { setTextColor(textColor === "black" ? "blue" : "black"); }}>
        Change Text Color
      </button>

      <br />

      {/* 🔹 showText true ise metni gösterir */}
      {showText === true && <h1 style={{ color: textColor }}>Welcome to React App</h1>}

      <br />

      {/* 🔹 Yaş göstergesi + artırma butonu */}
      {age} <button onClick={increaseAge}>Increase Age</button>

      <br /><br />

      {/* 🔹 Kullanıcıdan input alınır ve her değişiklikte handleInputChange çalışır */}
      <input type="text" onChange={handleInputChange} />

      {/* 🔹 Kullanıcının girdiği metin anlık olarak ekranda gösterilir */}
      {inputValue}

      <br />

      {/* 🔹 Yaş durumuna göre koşullu metin gösterimi */}
      <p style={{ color: 'orange', fontWeight: 'bold' }}>
        {isAdult ? "Is adult" : "Is not adult"}
      </p>
    </div>
  )
};


// 🧩 ÖZET NOTLAR:
// ✅ useState → React'te component içinde dinamik veri tutmayı sağlar.
// ✅ onClick, onChange → kullanıcı etkileşimleriyle state'i değiştiren event'lerdir.
// ✅ JSX içinde koşullu gösterim (conditional rendering) → {koşul && <element>} veya ternary ile yapılır.
// ✅ Bu örnek, React’te interaktif UI oluşturmanın temelini gösteriyor:
//    🔸 State yönetimi (yaş, metin, renk)
//    🔸 Event handling (butonlar, inputlar)
//    🔸 Koşullu render ve dinamik stil kullanımı
