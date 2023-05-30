import { useNavigate } from "react-router-dom";
import { createPost } from "../services/blogPost-api";

function CreatePostPage() {
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
    <div>
      <h4>Create a New Post</h4>
      <form onSubmit={createNewPost}>
        <input type="text" name="content" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreatePostPage;
