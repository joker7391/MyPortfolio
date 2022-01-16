import React, { useState, useEffect } from "react";
import { getDate } from "./helper/Date";
import Logo from "../../../images/holy-spirit/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setDate(new Date());
  }

  const [open, setOpen] = useState(false);

  const openToggle = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <div className="hidden lg:block">
        <div className="bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between">
              <div className="py-2 text-white">
                <span className="px-2">{getDate}</span>|
                <span className="px-2">{date.toLocaleTimeString()}</span>
              </div>
              <div className="text-white">
                <div className="py-2">
                  <span className="px-4">Contact Us: 732-4205</span>
                  <a
                    href="https://www.facebook.com/BHSQC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none"
                  >
                    <i className="px-2 fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none"
                  >
                    <i className="px-2 fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://twitter.com/brgyholyspirit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none"
                  >
                    <i className="px-2 fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#3599DD" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between h-12">
            <button
              onClick={openToggle}
              className="visible focus:outline-none md:hidden lg:hidden"
            >
              <svg
                className="w-8 h-8 text-white fill-current hover:text-gray-500"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div>
              <Link to="/barangay">
                <img
                  className="visible w-12 md:w-24 lg:visible"
                  src={Logo}
                  alt="barangay-logo"
                />
              </Link>
            </div>

            <div className="hidden px-2 mt-3 font-bold text-white uppercase md:block">
              <Link to="/barangay" className="pr-10">
                Home
              </Link>
              <Link to="/directory" className="pr-10">
                Directories
              </Link>
              {/* <Link to="/" className="pr-10">
                Stories
              </Link>
              <Link to="/" className="pr-10">
                Events
              </Link> */}
              <Link to="/public" className="pr-10">
                Public Services
              </Link>
              <Link to="/about-holyspirit">About Us</Link>
            </div>
          </div>
        </div>
        <div className={open ? "md:hidden" : "hidden"}>
          <div className="flex flex-col mt-3 font-bold text-white uppercase">
            <Link to="/barangay">
              <div className="px-1 py-1 hover:bg-gray-100 hover:text-blue-500">
                Home
              </div>
            </Link>
            <Link to="/directory">
              <div className="px-1 py-1 hover:bg-gray-100 hover:text-blue-500">
                Directories
              </div>
            </Link>
            {/* <Link to="/">
              <div className="px-1 py-1 hover:bg-gray-100 hover:text-blue-500">
                Stories
              </div>
            </Link>
            <Link to="/">
              <div className="px-1 py-1 hover:bg-gray-100 hover:text-blue-500">
                Events
              </div>
            </Link> */}
            <Link to="/public">
              <div className="px-1 py-1 hover:bg-gray-100 hover:text-blue-500">
                Public Services
              </div>
            </Link>
            <Link to="/about-holyspirit">
              <div className="px-1 py-1 hover:bg-gray-100 hover:text-blue-500">
                About Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
