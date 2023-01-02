import React, { Component } from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Footer extends Component {
  render() {
    return (
      <>
        <div
          className="bg-success"
          style={{
            position: "fixed",
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            textAlign: "center",
            //backgroundColor: "#28a745",
          }}
        >
          <p style={{ paddingTop: "10px" }}>IOE, Pulchowk Campus @ 2023</p>
        </div>
      </>
    );
  }
}

export default Footer;
