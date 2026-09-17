import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/Feed" element={<Feed/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;