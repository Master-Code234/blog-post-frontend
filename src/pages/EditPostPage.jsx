import { getPost, editPost } from "../services/blogPost-api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/EditPostPage.css";

export default function EditPost() {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    getPost(id).then((res) => setData(res.data));
  }, []);

  const editThePost = (e) => {
    e.preventDefault();
    const updatedPost = { content: e.target.content.value };
    editPost(id, updatedPost);
    nav(`/${id}`);
  };
  return (
    <div className="edit-post-page">
      <form className="post-page-form" onSubmit={editThePost}>
        <h1>Edit Post</h1>
        Content:
        <input type="text" name="content" defaultValue={data.content} />
        <button type="submit">Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
}
