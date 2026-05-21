// App.jsx

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BrowseItems from "./pages/BrowseItems";
import ReportItem from "./pages/ReportItem";
import MyItems from "./pages/MyItems";
import About from "./pages/About";



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/report" element={<ReportItem />} />
        <Route path="/my-items" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;