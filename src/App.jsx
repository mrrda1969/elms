import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./auth/Register";
import Login from "./auth/Login";
import Home from "./components/Home";
import Protected from "./components/Protected";
import TopNavbar from "./components/Navbar";
import Logout from "./auth/Logout";
import { createContext, useState } from "react";
import MessagePopup from "./lib/MessagePopup";

export const SetPopupContext = createContext();

function App() {
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <BrowserRouter basename="/app">
      <SetPopupContext.Provider value={setPopup}>
        <TopNavbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
        <MessagePopup
          open={popup.open}
          setOpen={(status) => setPopup({ ...popup, open: status })}
          severity={popup.severity}
          message={popup.message}
        />
      </SetPopupContext.Provider>
    </BrowserRouter>
  );
}

export default App;
