import React from "react";
import Footer from "./layout/Footer";

const Landing = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "inline",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "sans-serif",
          }}
        >
          Please login to access the system....
        </h1>
        <br />
        <h3>Features of this application are...</h3>
        <ul style={{ color: "black" }}>
          <li>Centralization of published research papers in popular sites </li>
          <li>Search for papers</li>
          <li>Edit paper details</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
