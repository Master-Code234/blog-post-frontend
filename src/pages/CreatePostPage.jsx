import { useNavigate } from "react-router-dom";
import { createPost } from "../services/blogPost-api";
import "../styles/CreatePostPage.css";

export default function CreatePost() {
  const nav = useNavigate();

  const createNewPost = async (e) => {
    e.preventDefault();
    try {
      const post = { content: e.target.content.value };
      console.log(post);
      await createPost(post).then(() => window.location.reload(false));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="postPage">
      <h4>Create a New Post</h4>
      <form onSubmit={createNewPost}>
        <input className="post-input" type="text" name="content" required />
        <input className="post-submit" type="submit" />
      </form>
    </div>
  );
}
