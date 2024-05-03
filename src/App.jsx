import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./auth/Register";
import Login from "./auth/Login";
import Home from "./components/Home";
import Protected from "./components/Protected";
import NavBar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename="/app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
