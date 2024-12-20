import { Link } from "react-router-dom";
import "../styles/Post.css";

// Component to display a single blog post
export default function Post({ post }) {
  return (
    <div className="post-container">
      <button className="post">
        <Link className="post-link" to={`/${post._id}`}>
          {post.content}
        </Link>
      </button>
    </div>
  );
}
