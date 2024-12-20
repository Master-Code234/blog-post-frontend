import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Imports
import PostPage from "./pages/ShowPostPage";
import AllPostPage from "./pages/AllPostPage";
import EditPost from "./pages/EditPostPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllPostPage />} />
          <Route path="/:id" element={<PostPage />} />
          <Route path="/:id/edit" element={<EditPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
