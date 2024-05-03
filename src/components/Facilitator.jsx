import { Navigate, useLocation } from "react-router-dom";

const Facilitator = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <div>Facilitator Page</div>;
};

export default Facilitator;
