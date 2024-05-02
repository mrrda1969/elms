import { Navigate, useLocation } from "react-router-dom";

const Protected = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <div>Protected Content</div>;
};

export default Protected;
