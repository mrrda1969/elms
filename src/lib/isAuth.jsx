const isAuth = () => {
  return localStorage.getItem("token");
};

export const userRole = () => {
  return localStorage.getItem("role");
};

export const username = () => {
  return localStorage.getItem("username");
};

export default isAuth;
