/*
import { Routes, Router, Route } from 'react-router-dom';
import { Home, Navbar, CreatePost, PostDetail } from './';

function App() {
  return (
    <div className="container">
      <Routes>
        <Navbar />
        <Router>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:postId" element={<PostDetail />} />
          <Route exact path="/create-post" element={<CreatePost />} />
        </Router>
      </Routes>
    </div>
  );
}

export default App;
*/

import { Routes, Route, Navigate } from 'react-router-dom';
// import { Home, Navbar, CreatePost, PostDetail } from './';

import Navbar from './Navbar';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Home from './Home';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
