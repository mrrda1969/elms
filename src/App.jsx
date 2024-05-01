import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./auth/Register";
import Login from "./auth/Login";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
