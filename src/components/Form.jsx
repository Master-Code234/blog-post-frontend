import "../styles/Form.css";

// Components
import Button from "./Button";
import Input from "./Input";

import { createPost } from "../services/blogPost-api";
import { useState } from "react";

export default function Form() {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createPost({ content });
      console.log("Post Created!");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="postForm">
      <Input type="text" value={content} onChange={handleChange} />
      <Button type="submit" name="Post" onClick={handleSubmit} />
    </div>
  );
}
