import { getPost, editPost } from "../services/blogPost-api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    <div>
      <form onSubmit={editThePost}>
        Content:
        <input type="text" name="content" defaultValue={data.content} />
        <input type="submit" />
      </form>
    </div>
  );
}
