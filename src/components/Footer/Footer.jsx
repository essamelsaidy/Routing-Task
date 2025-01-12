import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row g-3 py-5">
            <div className="col-md-4">
              <div className="item text-center pt-5 pb-5 text-white">
                <h3 className="fs-2">LOCATION</h3>
                <p className="fs-5">2215 John Daniel Drive</p>
                <h4>Clark, MO 65243</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center pt-5 pb-5 text-white">
                <h1 className="">AROUND THE WEB</h1>
                <div className="footer-icon d-flex gap-2 justify-content-center">
                  <i class="fa-brands fa-facebook border p-3 fs-3 rounded-circle"></i>
                  <i class="fa-brands fa-twitter border p-3 fs-3 rounded-circle"></i>
                  <i class="fa-brands fa-linkedin border p-3 fs-3 rounded-circle"></i>
                  <i class="fa-solid fa-globe border p-3 fs-3 rounded-circle"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center pt-5 pb-5 text-white">
                <h2 className="">ABOUT FREELANCER</h2>
                <p className="fs-5 m-0">Freelance is a free to use, licensed</p>
                <p className="fs-5 m-0">Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="bg-gray text-center text-white py-4 fs-4 m-0">
            Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </>
  );
}
