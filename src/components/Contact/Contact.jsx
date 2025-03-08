import React from "react";
export default function Contact() {
  return (
    <>
      <div className="container pt-5 mt-5 mb-5  d-flex justify-content-center">
        <form className="w-50 d-flex flex-column align-items-center">
          <label htmlFor="userName" className="position-relative px-3">UserName</label>
          <input id="userName" type="text" className=" border-0 position-relative  w-100 rounded border-bottom py-3 " />
          <label htmlFor="userAge" className="position-relative px-3">userAge</label>
          <input id="userAge" type="text" className=" border-0 position-relative  w-100 rounded border-bottom py-3 " />
          <label htmlFor="userEmail" className="position-relative px-3">userEmail</label>
          <input id="userEmail" type="email" className=" border-0 position-relative  w-100 rounded border-bottom py-3 " />
          <label htmlFor="userPass" className="position-relative px-3">userPass</label>
          <input id="userPass" type="password" className=" border-0 position-relative  w-100 rounded border-bottom py-3 " />
          <button className="btn btn-lg mt-2"> Send Message</button>
        </form>
      </div>
    </>
  );
}
