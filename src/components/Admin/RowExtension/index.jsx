import { Link } from "react-router-dom";
import Graphs from "./Graphs";
import "./style.css";
import React from "react";

// Creator : Team e -
function RowExtension() {
  return (
    <div className="rowGrap">
      <Graphs />
      <Link className="linkToStudentDetails" to="/StudentDetails">
        <img
          className="detailed"
          src={require("./detailed.png")}
          alt="detailed"
        />
      </Link>
    </div>
  );
}

export default RowExtension;
