import { getAllPost } from "../services/blogPost-api";
import { useState, useEffect } from "react";
import CreatePostPage from "./CreatePostPage";
import Post from "../components/Post";
import "../styles/AllPostPage.css";

export default function AllPostPage() {
  const [allPost, setAllPost] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch posts from the backend API when the component mounts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await getAllPost();
        setAllPost(res.data);
        setPostCount(res.data.length);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        alert("Unable to fetch posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="showAllPost">
      <h1>All Post</h1>
      {isLoading ? <p>Loading posts...</p> : <p>Post Count: {postCount}</p>}
      {!isLoading && (
        <ul>
          {allPost.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </ul>
      )}
      <CreatePostPage />
    </div>
  );
}
