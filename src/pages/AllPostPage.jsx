import { getAllPost } from "../services/blogPost-api";
import { useState, useEffect } from "react";
import CreatePostPage from "./CreatePostPage";
import { Link } from "react-router-dom";

import "../styles/AllPostPage.css";

export default function AllPostPage() {
  const [allPost, setAllPost] = useState([]);
  const [postCount, setPostCount] = useState(0);
  useEffect(() => {
    getAllPost().then((res) => {
      setAllPost(res.data);
      setPostCount(res.data.length);
    });
  }, []);

  return (
    <div className="showAllPost">
      <h1>All Post</h1>
      <p>Post Count: {postCount}</p>

      <ul>
        {allPost.map((post) => {
          return (
            <div key={post._id} className="post-container">
              <button className="post">
                <Link className="post-link" to={`/${post._id}`}>
                  {post.content}
                </Link>
              </button>
            </div>
          );
        })}
      </ul>
      <CreatePostPage />
    </div>
  );
}
