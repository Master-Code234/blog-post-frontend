import { useNavigate } from "react-router-dom";
import { createPost } from "../services/blogPost-api";
import "../styles/CreatePostPage.css";

export default function CreatePost() {
  const nav = useNavigate();

  const createNewPost = async (e) => {
    try {
      const post = { content: e.target.content.value };
      await createPost(post).then(() => nav("/"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="postPage">
      <h4>Create a New Post</h4>
      <form onSubmit={createNewPost}>
        <input className="post-input" type="text" name="content" />
        <button className="post-btn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
