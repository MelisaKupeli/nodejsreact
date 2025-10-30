export const User = (props) => {
  const { name, age, email } = props;
  const isAdult = age >= 18;
  return(
    <div className="user">
    <h1>Hello {name}</h1>
    <h2>{age} years old</h2>
    <h3>{email}</h3>

    <p>{isAdult ? "Is adult:" : "Is not adult:"}</p>

    </div>
  );
}

export
const User2 = () => {
  const name = "Melisa", age=18, email="xxd@gmail.com";
  return(
    <div className="user2">
    <h1>Hello {name}</h1>
    <h2>{age} years old</h2>
    <h3>{email}</h3>
    </div>
  );
}