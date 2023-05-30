import { useState, useEffect } from "react";
import { getPost, deletePost } from "../services/blogPost-api";
import { useParams, useNavigate } from "react-router-dom";

export default function Post() {
  const nav = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    getPost(id).then((res) => setPost(res.data));
  }, []);

  const deleteThePost = () => {
    deletePost(id);
    nav("/");
  };

  return (
    <div>
      <h1> Edit Post</h1>
      <h3>{post.content}</h3>
      <button
        onClick={() => {
          nav(`/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Home
      </button>
      <button onClick={deleteThePost}>Delete</button>
    </div>
  );
}
