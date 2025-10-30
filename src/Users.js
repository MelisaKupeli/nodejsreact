export 
const Users =() => {
  const times = [1,2,3];
const User = (props) => {
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
};


const User2 = () => {
  const name = "Melisa", age=18, email="xxd@gmail.com";
  return(
    <div className="user2">
    <h1>Hello {name}</h1>
    <h2>{age} years old</h2>
    <h3>{email}</h3>
    </div>
  );
};

return (
    <div>
      {times.map((_, index) => (
        <div key={index}>
          <User2 />
        </div>
      ))}

      <div>
        <User name="Mell" age={15} email="xxdx@gmail.com" />
        <User name="Melisa" age={18} email="xxd@gmail.com" />
      </div>
    </div>
  );
};