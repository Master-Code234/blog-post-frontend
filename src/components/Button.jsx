export default function Button({ type, name, onClick }) {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
