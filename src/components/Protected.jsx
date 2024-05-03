import { Navigate, useLocation } from "react-router-dom";
import Logout from "../auth/Logout";
import Student from "./Student";
import Facilitator from "./Facilitator";
import { userType } from "../lib/isAuth";

const Protected = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <div>
      {userType() === "student" ? (
        <Student />
      ) : userType() === "facilitator" ? (
        <Facilitator />
      ) : (
        <p>Admin</p>
      )}

      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default Protected;
