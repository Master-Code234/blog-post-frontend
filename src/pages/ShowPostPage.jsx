import { useState, useEffect } from "react";
import { getPost, deletePost } from "../services/blogPost-api";
import { useParams, useNavigate } from "react-router-dom";

import "../styles/ShowPostPage.css";

export default function ShowPost() {
  const nav = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    getPost(id).then((res) => setPost(res.data));
  }, []);

  const deleteThePost = async () => {
    await deletePost(id);
    nav("/");
  };

  return (
    <div className="show-post-page">
      <h1>Post Details</h1>
      <h3>{post.content}</h3>
      <div className="button-wrapper">
        <button
          className="edit-btn"
          onClick={() => {
            nav(`/${id}/edit`);
          }}
        >
          Edit
        </button>
        <button
          className="home-btn"
          onClick={() => {
            nav("/");
          }}
        >
          Home
        </button>
        <button className="delete-btn" onClick={deleteThePost}>
          Delete
        </button>
      </div>
    </div>
  );
}
