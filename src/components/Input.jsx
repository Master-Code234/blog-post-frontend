export default function Input({ type, value, onChange }) {
  return (
    <div>
      <input type={type} value={value} onChange={onChange}></input>
    </div>
  );
}
