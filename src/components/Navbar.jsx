import { BiSearch } from "react-icons/bi";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a href="" className="navbar-brand">
          RDA
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
          <div className="input-group">
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
        <div></div>
      </div>
    </nav>
  );
};

export default TopNavbar;
