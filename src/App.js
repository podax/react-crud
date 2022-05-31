import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Blogs/Index";
import Create from "./Blogs/Create";
import BlogDetails from "./Blogs/Show";
import NotFound from "./NotFound";
import EditBlog from "./Blogs/Edit";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/create" element={<Create />} />
              <Route exact path="/blogs/:id" element={<BlogDetails />} />
              <Route exact path="/blogs/:id/edit" element={<EditBlog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
