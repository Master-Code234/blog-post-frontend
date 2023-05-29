import Input from "./Input";
import Button from "./Button";

export default function PostBox() {
  return (
    <div className="postBox">
      <Input />
      <Button name="Edit" />
      <Button name="Delete" />
    </div>
  );
}
