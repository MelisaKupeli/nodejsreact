
export const Friends = ({friends}) => {
  return (
    <div>
      <h3>Friends:</h3>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}