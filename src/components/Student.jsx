import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Student = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <div>Student Name: {username}</div>;
};

export default Student;
