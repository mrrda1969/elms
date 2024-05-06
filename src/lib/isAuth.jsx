const isAuth = () => {
  return localStorage.getItem("token");
};

export const userType = () => {
  return localStorage.getItem("role");
};

export const userAcc = () => {
  return localStorage.getItem("username");
};

export default isAuth;
