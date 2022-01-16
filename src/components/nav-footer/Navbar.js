import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wave } from "react-animated-text";
import { Slide } from "react-reveal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openToggle = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="bg-gray-600">
      <div className="flex justify-between max-w-6xl p-4 mx-auto text-white">
        <a href="/">
          <div className="flex flex-row">
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
            <h1 className="px-1 py-1 font-semibold uppercase">
              <Wave
                text="My Portfolio"
                effect="verticalFadeIn"
                effectDuration={0.5}
                effectChange={0.1}
                iterations={1}
              />
            </h1>
            {/* going to replace with social media links */}
          </div>
        </a>
        <div className="flex flex-row items-center">
          <button onClick={openToggle} className="focus:outline-none sm:hidden">
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
          <Slide top>
            <div className="hidden md:block">
              <Link to="/" className="px-2 rounded hover:bg-gray-500">
                Home
            </Link>
              <Link to="/about" className="px-2 rounded hover:bg-gray-500">
                About
            </Link>

              <Link to="/projects" className="px-2 rounded hover:bg-gray-500">
                Projects
            </Link>
              <Link
                to="/project-samples"
                className="px-2 rounded hover:bg-gray-500"
              >
                React Projects
            </Link>
            </div>
          </Slide>

        </div>
      </div>
      <div className={open ? "flex flex-col md:hidden px-2" : "hidden"}>
        <Link
          to="/"
          className="px-2 py-1 mb-1 text-white rounded hover:text-white hover:bg-gray-500"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-2 py-1 mb-1 text-white rounded hover:text-white hover:bg-gray-500"
        >
          About
        </Link>

        <Link
          to="/projects"
          className="px-2 py-1 mb-1 text-white rounded hover:text-white hover:bg-gray-500"
        >
          Projects
        </Link>
        <Link
          to="/project-samples"
          className="px-2 py-1 mb-1 text-white rounded hover:text-white hover:bg-gray-500"
        >
          React Projects
        </Link>
      </div>
    </div>
  );
}
