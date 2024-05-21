export const server = "http://localhost:4400";
const apiList = {
  login: `${server}/users/login`,
  signup: `${server}/users/new`,
  courses: `${server}/courses`,
  assignCourse: `${server}/courses/assign/facilitator`,
  newcourse: `${server}/courses/new`,
};

export default apiList;
