import React from "react";
import Navbar from "./layout/Navbar";
// import LogIn from "./pages/LogIn";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import AddUser from "./pages/AddUser";
import PrivateRoutes from "./utils/PrivateRoutes";
import SinglePost from "./pages/SinglePost";
import Profile from "./pages/Profile";
import UploadPost from "./pages/UploadPost";
import Chat from "./pages/Chat";
import ChatUsers from "./components/ChatUsers";
//      <Route exact path="/" element={<LogIn />} />

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/upload-post" element={<UploadPost />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route element={<PrivateRoutes />}>
            {/* <Route exact path="/home" element={<Home />} /> */}
          </Route>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/posts/:id" element={<SinglePost />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/chat-users" element={<ChatUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
