import React from 'react'
import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <div className="container">
      <div className="btn" id="signup-btn">
        <Link to="/addevent" className="btn btn-success">
          Add Events
        </Link>
      </div>

      <div className="btn" id="signin-btn">
        <Link className="btn btn-primary" to="/showevents">
          Manage Events
        </Link>
      </div>
    </div>
  )
}
