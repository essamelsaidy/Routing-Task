import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className=" navbar fixed-top   d-flex justify-content-around align-items-center pt-2 pb-2">
        <h1 className="text-white text-uppercase fw-polder">
        <Link
              className="text-decoration-none fs-2 text-white fs-5 fw-bolder"
              to="home">
              
              strat framework
            </Link>
        </h1>
        <ul className="list-unstyled ps-5 d-flex gap-5 p-2 m-0">
          <li>
            <Link
              className="text-decoration-none text-white fs-5 fw-bolder"
              to="about">
              
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none text-white fs-5 fw-bolder"
              to="protfolio"
            >
              
              Protfolio
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none text-white fs-5 fw-bolder"
              to="contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
