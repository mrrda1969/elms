export const server = "http://localhost:4400";
const apiList = {
  login: `${server}/auth/login`,
  faculty: {
    create: `${server}/faculty/new`,
    getAll: `${server}/faculty`,
  },
  department: {
    create: `${server}/department/new`,
  },
  student: {
    shortlist: `${server}/student/shortlist`,
  },
};

export default apiList;
