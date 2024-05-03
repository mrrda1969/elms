import { Navigate, useLocation } from "react-router-dom";

const Student = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <div>Student Page</div>;
};

export default Student;
