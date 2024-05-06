import { BiSearch, BiUserCircle } from "react-icons/bi";
import isAuth from "../lib/isAuth";

const TopNavbar = () => {
  const username = localStorage.getItem("username");
  return (
    <>
      {isAuth() ? (
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <a href="" className="navbar-brand">
              ELMS
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    My Courses
                  </a>
                </li>
              </ul>
            </div>
            <form role="search" className="d-flex ">
              <div className="input-group me-2">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#searchCollapse"
                  aria-expanded="false"
                  aria-controls="searchCollapse"
                >
                  <BiSearch />
                </button>
                <input
                  type="text"
                  className="form-control search-bar collapse"
                  id="searchCollapse"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
            <div className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  href=""
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BiUserCircle className="bi" size={24} />
                </a>
                {/* <p className="account-caption">{username}</p> */}
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <p className="dropdown-item">Username : {username}</p>
                  </li>
                  <li>
                    <a href="" className="dropdown-item">
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <a href="logout" className="dropdown-item">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <a href="" className="navbar-brand">
              ELMS
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default TopNavbar;
