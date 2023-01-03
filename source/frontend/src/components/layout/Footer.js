import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
        <div
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            textAlign: "center",
            backgroundColor: "#0489f5",
          }}
        >
          <p style={{ paddingTop: "10px", color: "black", fontSize: "17px" }}>
            &copy; IOE, Pulchowk Campus, 2023
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
