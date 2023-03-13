import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#0489f5" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-black" href="#">
            Research Repository
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{
              width: "100%",
            }}
          >
            {isAuthenticated ? (
              <div
                className="navbar-nav ms-auto"
                style={{
                  display: "flex",
                }}
              >
                <div className="nav-item">
                  {user.username === "superadmin" ? (
                    <div style={{ width: "450px", marginTop: "10px" }}>
                      <a
                        aria-current="page"
                        href="#/paper_analytics"
                        style={{
                          color: "black",
                          margin: "20px",
                          textDecoration: "none",
                        }}
                      >
                        Analytics
                      </a>
                      <a
                        aria-current="page"
                        href="#/addPaper"
                        style={{
                          color: "black",
                          margin: "20px",
                          textDecoration: "none",
                        }}
                      >
                        DashBoard
                      </a>
                      <a
                        aria-current="page"
                        href="#/professor_performance"
                        style={{
                          color: "black",
                          margin: "20px",
                          textDecoration: "none",
                        }}
                      >
                        Professor Performances
                      </a>
                    </div>
                  ) : (
                    <a
                      className="nav-link active text-black"
                      aria-current="page"
                      href="#/addPaper"
                    >
                      Add Paper
                    </a>
                  )}
                </div>
                <li className="nav-item">
                  {user.username === "superadmin" ? (
                    ""
                  ) : (
                    <a
                      className="nav-link active text-black"
                      aria-current="page"
                      href="#/profile"
                    >
                      Profile
                    </a>
                  )}
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.props.logout}
                    aria-current="page"
                    className=" nav-link active text-black"
                    href="#/index"
                  >
                    Log Out
                  </a>
                </li>
              </div>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-black"
                    aria-current="page"
                    href="#/evaluation"
                  >
                    Evaluation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-black"
                    aria-current="page"
                    href="#/register"
                  >
                    Register
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-black"
                    aria-current="page"
                    href="#/login"
                  >
                    Login
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
