import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
      <footer
        className="text-center text-white m-4"
        style={{ backgroundColor: "#f1f1f1" }}
      >
         <div className="container pt-4">
          <section className="mb-4">
            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </Link>
          </section>
        </div>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: (0, 0, 0, 0.2) }}
        >
          © 2020 Copyright:
          <Link className="text-dark" href="#">
            by shubham gunjal
          </Link>
        </div>
      </footer>
   
  );
}
