import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";

export default function SimpleBackdrop() {
  return (
    <div
      style={{
        color: "#0033cc",
        margin: "auto",
        marginTop: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CircularProgress
        style={{
          color: "#0033cc",
          marginBottom: "2rem",
        }}
      />
      <h1>
        Loading
        <div className="pulse"></div>
        <div className="pulse"></div>
        <div className="pulse"></div>
      </h1>
    </div>
  );
}
