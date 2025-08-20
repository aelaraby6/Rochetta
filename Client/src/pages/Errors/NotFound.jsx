import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#191919",
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", color: "green" }}>
        404
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Oops! Page Not Found
      </h2>
      <p style={{ maxWidth: "400px", marginBottom: "20px" }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "green",
          color: "#191919",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#fff";
          e.target.style.color = "#191919";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "green";
          e.target.style.color = "#191919";
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
