import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetails";
import Home from "./components/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogsdetail" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
