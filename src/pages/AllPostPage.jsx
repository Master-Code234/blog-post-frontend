import { getAllPost } from "../services/blogPost-api";
import { useState, useEffect } from "react";
import CreatePostPage from "./createPostPage";
import { Link } from "react-router-dom";

export default function AllPostPage() {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    getAllPost().then((res) => setAllPost(res.data));
  }, []);

  return (
    <div>
      <h1>All Post</h1>
      <ul>
        {allPost.map((post) => {
          return (
            <div>
              <button>
                <Link to={`/${post._id}`}>{post.content}</Link>
              </button>
            </div>
          );
        })}
      </ul>
      <CreatePostPage />
    </div>
  );
}
