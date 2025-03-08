import React from "react";
import style from "./Portfolio.css"

import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    const images = document.querySelectorAll(".item img");
    const layer = document.querySelectorAll(".layer");
    const lightBoxContainer = document.querySelector(".lightBoxContainer");
    const lightBox = document.querySelector(".lightBox");

    const closeLightBox = () => {
      lightBoxContainer.classList.replace("d-flex", "d-none");
      lightBox.innerHTML = ""; 
    };

    
    layer.forEach((layerElement, index) => {
      layerElement.addEventListener("click", (e) => {
        e.stopPropagation(); 
        const imageSrc = images[index].getAttribute("src"); 
        lightBox.innerHTML = `<img src="${imageSrc}" class="w-100 rounded-2" alt="" />`;
        lightBoxContainer.classList.replace("d-none", "d-flex");
      });
    });

   
    lightBoxContainer.addEventListener("click", closeLightBox);

    return () => {
     
      layer.forEach((layerElement) => {
        layerElement.removeEventListener("click", () => {});
      });
      lightBoxContainer.removeEventListener("click", closeLightBox);
    };
  }, []);

  return (
    <>
      <div className="container py-5 mt-4 text-center">
        <div className="protfolio-title">
          <h1 className="text-uppercase mb-0 mt-5">portfolio component</h1>
          <div className="title-icon position-relative">
            <i className="fa-solid fa-star fs-2 p-3"></i>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-md-4">
            <div className="item position-relative">
              <img
                src="../../public/poert1.png"
                className="w-100 rounded-2"
                alt=""
              />
              <div className="layer rounded-2 position-absolute">
                <i className="fa-solid fa-plus porder p-3 rounded-circle"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img
                src="../../public/port2.png"
                className="w-100 rounded-2"
                alt=""
              />
              <div className="layer rounded-2 position-absolute">
                <i className="fa-solid fa-plus porder p-3 rounded-circle"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img
                src="../../public/port3.png"
                className="w-100 rounded-2"
                alt=""
              />
              <div className="layer rounded-2 position-absolute">
                <i className="fa-solid fa-plus porder p-3 rounded-circle"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img
                src="../../public/poert1.png"
                className="w-100 rounded-2"
                alt=""
              />
              <div className="layer rounded-2 position-absolute">
                <i className="fa-solid fa-plus porder p-3 rounded-circle"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img
                src="../../public/port2.png"
                className="w-100 rounded-2"
                alt=""
              />
              <div className="layer rounded-2 position-absolute">
                <i className="fa-solid fa-plus porder p-3 rounded-circle"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img
                src="../../public/port3.png"
                className="w-100 rounded-2"
                alt=""
              />
              <div className="layer rounded-2 position-absolute">
                <i className="fa-solid fa-plus porder p-3 rounded-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lightBoxContainer d-none">
        <div className="lightBox mt-5"></div>
      </div>
    </>
  );
}
