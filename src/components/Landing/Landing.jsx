import React from "react";
import "./landing.css";
import {Link} from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-main">
      <Link to="/dashboard">
        <button>Go to Dashbaord</button>
      </Link>
    </div>
  );
}


export default Landing;
