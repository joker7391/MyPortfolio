import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-600">
      <div className="max-w-6xl mx-auto py-4">
        <div className="text-lg tracking-tight text-white text-center lg:flex flex-row justify-between">
          <h1>
            &copy; 2020<span className="font-semibold"> Jester Merida</span>
          </h1>
          <a
            href="https://www.facebook.com/ProGamerJez"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <span className="text-base px-2">Facebook</span>
          </a>
          <a
            href="https://twitter.com/JezYanYow"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <span className="text-base px-2">Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/jester_merida/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <span className="text-base px-2">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jester-merida-13b5971b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <span className="text-base px-2">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
