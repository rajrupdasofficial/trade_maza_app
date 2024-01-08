import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetails";
import Home from "./Pages/Home";
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
