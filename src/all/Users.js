// 🔹 React'te bir bileşen (component) tanımlıyoruz.
// Bu component'in adı "Users" ve içinde başka alt component'ler (User, User2) tanımlayacağız.
export const Users = () => {

  // 🔹 Bu bir dizi — sadece 3 kere User2 component'ini ekrana bastırmak için kullanacağız.
  const times = [1, 2, 3];

  // 🔹 Bu component props alıyor.
  // props = dışarıdan gelen veriler (name, age, email gibi)
  const User = (props) => {
    // 🔹 props içinden name, age ve email alanlarını ayırıyoruz (destructuring)
    const { name, age, email } = props;

    // 🔹 Eğer yaş 18 veya üstüyse yetişkin kabul ediyoruz
    const isAdult = age >= 18;

    // 🔹 Component JSX döndürüyor (görünüm kısmı)
    return (
      <div className="user">
        <h1>Hello {name}</h1>
        <h2>{age} years old</h2>
        <h3>{email}</h3>

        {/* 🔹 Ternary operator (koşullu gösterim) */}
        <p>{isAdult ? "Is adult" : "Is not adult"}</p>
      </div>
    );
  };

  // 🔹 Bu component props almıyor, veriler kendi içinde sabit tanımlanmış.
  const User2 = () => {
    const name = "Melisa", age = 18, email = "xxd@gmail.com";

    return (
      <div className="user2">
        <h1>Hello {name}</h1>
        <h2>{age} years old</h2>
        <h3>{email}</h3>
      </div>
    );
  };

  // 🔹 Ekranda hangi component'leri göstereceğimizi belirliyoruz
  return (
    <div>
      {/* 🔹 3 kere User2 component'ini ekrana yazdırır */}
      {times.map((_, index) => (
        <div key={index}>
          <User2 />
        </div>
      ))}

      {/* 🔹 Burada props gönderiyoruz */}
      <div>
        <User name="Mell" age={15} email="xxdx@gmail.com" />
        <User name="Melisa" age={18} email="xxd@gmail.com" />
      </div>
    </div>
  );
};



// 🧩 ÖZET NOTLAR:
// ✅ "Users" bir ana component’tir (parent component)
// ✅ "User" ve "User2" bu component’in içindeki alt bileşenlerdir (child components)
// ✅ "User" props alır → dışarıdan name, age, email gibi verileri parametre olarak alır.
// ✅ "User2" props almaz → verileri kendi içinde sabit yazar.
// ✅ times.map → 3 kere User2 bileşenini ekrana bastırır.
// ✅ props = component’ler arası veri paylaşımı sağlar.
// ✅ Component = fonksiyon gibi davranır, JSX döndürür (ekran görünümü).
