import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="home mt-5 ">
        <div className="container ">
          <div className="row ">
            <div className="col-md-12 d-flex justify-content-center align-items-center flex-column gap-3">
              <div className="hero mb-3 mt-5 rounded-circle">
                <img src="../../public/avataaars.svg" alt="" />
              </div>
              <div className="hero-title text-center pb-3">
                <h1 className="text-white  fw-polder">Start Framework</h1>

                <div className="home-icon position-relative">
                <i class="fa-solid fa-star fs-2 text-white  p-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
