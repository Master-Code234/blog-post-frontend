import { Routes, Route } from "react-router-dom";
import AllPostPage from "../pages/AllPostPage";
import PostPage from "../pages/ShowPostPage";
import EditPost from "../pages/EditPostPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllPostPage />} />
      <Route path="/:id" element={<PostPage />} />
      <Route path="/:id/edit" element={<EditPost />} />
    </Routes>
  );
}
