import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import TelegramIcon from "@material-ui/icons/Telegram";
const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <div style={{ fontFamily: "Besley" }}>
      <nav
        class="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "rgb(255, 218, 218)", color: "black" }}
      >
        <div class="container-fluid">
          <p>
            {" "}
            <span
              style={{
                fontFamily: "Besley",
                color: "#fffcfe",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              {"  "}
              <TelegramIcon sx={{ fontSize: 20 }} /> Polish
            </span>{" "}
            <span style={{ color: "#ff00c3", fontFamily: "Besley" }}>
              {" "}
              Me Pretty{" "}
            </span>
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 m-4">
              <li class="nav-item mx-2">
                <NavLink to="/" class="nav-link active" aria-current="page">
                  <span style={{ color: "#ff00c3", fontFamily: "Besley" }}>
                    Home
                  </span>
                </NavLink>
              </li>

              <li class="nav-item mx-2">
                <Link to="/shop" class="nav-link active">
                  <span style={{ color: "#ff00c3", fontFamily: "Besley" }}>
                    Shop
                  </span>
                </Link>
              </li>
              {/* <li class="nav-item mx-2">
                <Link to="/myOrder" class="nav-link active" ><span style={{ color: "rgb(255, 218, 218)", fontFamily: "Besley" }}>MyOrder</span></Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/review" class="nav-link active" ><span style={{ color: "rgb(255, 218, 218)", fontFamily: "Besley" }}>Review</span></Link>
              </li>
              <li class="nav-item mx-2">
                <Link to="/pay" class="nav-link active" ><span style={{ color: "rgb(255, 218, 218)", fontFamily: "Besley" }}>Pay</span></Link>
              </li> */}
              <li class="nav-item mx-2">
                <Link to="/dashboard" class="nav-link active">
                  <span style={{ color: "#ff00c3", fontFamily: "Besley" }}>
                    Dashboard
                  </span>
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/login" class="nav-link active">
                  <span style={{ color: "#ff00c3", fontFamily: "Besley" }}>
                    Log In
                  </span>
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/doc" class="nav-link active" aria-current="page">
                  <span style={{ color: "#ff00c3", fontFamily: "Besley" }}>
                    Document
                  </span>
                </Link>
              </li>

              {localStorage.getItem("user") ? (
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href
                  >
                    {(user && user.name) || user.displayName || user.email}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href onClick={logout}>
                        Log-Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
