import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { SetPopupContext } from "../App";

const Logout = () => {
  const setPopup = useContext(SetPopupContext);
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setPopup({
      open: true,
      severity: "success",
      message: "Logged out successfully",
    });
  }, []);
  return <Navigate to="/login" />;
};

export default Logout;
