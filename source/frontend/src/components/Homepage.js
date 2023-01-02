import React, { Component, Fragment } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Footer from "./layout/Footer";
// import amanPic from "../../src/components/photos/logoTU.png";
class Homepage extends Component {
  render() {
    return (
      <div>
        {/*Search feature */}
        <form
          // onSubmit={this.onSubmit}
          style={{
            paddingBottom: "400px",
          }}
        >
          <h3
            className="text-center"
            style={{
              color: "green",
              fontSize: "24px",
              paddingBottom: "20px",
              paddingTop: "20px",
            }}
          >
            Meet the people powering our world-class research.
          </h3>
          <div className="input-group mx-auto" style={{ maxWidth: "500px" }}>
            <input
              className="form-control"
              type="text"
              name="search"
              placeholder="Search papers ..."
              // onChange={this.onChange}
              // value={this.state.search}
            />

            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </span>
          </div>
        </form>

        {/*researchers profile */}
        <h3 style={{ paddingBottom: "20px", color: "green" }}>
          Top Researchers Profile ...
        </h3>
        <div
          className="container-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "20px",
            paddingBottom: "50px",
          }}
        >
          <div
            className="column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              //src={subarnaPic}
              //alt="Person 1"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <h3 style={{ marginTop: "20px", fontSize: "18px" }}>Person 1</h3>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              View Profile
            </button>
          </div>

          <div
            className="column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              //src={amanPic}
              //alt="Person 2"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <h3 style={{ marginTop: "20px", fontSize: "18px" }}>Person 2</h3>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              View Profile
            </button>
          </div>

          <div
            className="column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              //src={amanPic}
              //alt="Person 3"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <h3 style={{ marginTop: "20px", fontSize: "18px" }}>Person 3</h3>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              View Profile
            </button>
          </div>

          <div
            className="column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              //src={amanPic}
              //alt="Person 4"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <h3 style={{ marginTop: "20px", fontSize: "18px" }}>Person 4</h3>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              View Profile
            </button>
          </div>

          <div
            className="column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              //src={amanPic}
              //alt="Person 5"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <h3 style={{ marginTop: "20px", fontSize: "18px" }}>Person 5</h3>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              View Profile
            </button>
          </div>

          <div
            className="column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              //src={amanPic}
              //alt="Person 6"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <h3 style={{ marginTop: "20px", fontSize: "18px" }}>Person 6</h3>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              View Profile
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
