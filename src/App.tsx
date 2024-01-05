import Blog from "./components/Blog";
import Home from "./components/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
