import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import { createContext, useState } from "react";
import MessagePopup from "./lib/MessagePopup";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import Adduser from "./pages/admin/addUser";
import CreateCourse from "./pages/admin/createCourse";
import CreateFaculty from "./pages/admin/createFaculty";
import SignUp from "./pages/student/SignUp";
import CreateDepartment from "./pages/admin/createDepartment";
import ShortlistStudent from "./pages/admin/shortlistStudent";

export const SetPopupContext = createContext();

function App() {
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="app">
        <SetPopupContext.Provider value={setPopup}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/adduser" element={<Adduser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/course" element={<CreateCourse />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shortlist_student" element={<ShortlistStudent />} />
            <Route path="/create_department" element={<CreateDepartment />} />
            <Route path="/create_faculty" element={<CreateFaculty />} />
          </Routes>

          <MessagePopup
            open={popup.open}
            setOpen={(status) => setPopup({ ...popup, open: status })}
            severity={popup.severity}
            message={popup.message}
          />
        </SetPopupContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
