import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Events from "../event/viewevents/Events";
export default function Home() {
  

  return sessionStorage.getItem("loginStatus") === 'true' ? (
    <div className="container">
      <h1>manage your events with us..</h1>
      <Events/>
    </div>
  ) : (
    <div className="container">
      <h1>Welcome To Our Application</h1>

      <div className="btn" id="signup-btn">
        <Link to="/signup" className="btn btn-success">
          SignUp
        </Link>
      </div>

      <div className="btn" id="signin-btn">
        <Link className="btn btn-primary" to="/signin">
          SignIn
        </Link>
      </div>
    </div>
  );
}
