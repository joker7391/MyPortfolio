import React from "react";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="max-w-6xl mx-auto py-4">
        <div className="text-lg tracking-tight text-white text-center lg:flex flex-row justify-between">
          <h1>
            &copy; 2020<span className="font-semibold">Daniel Jeffrey Aco</span>
          </h1>
          <a
            href="https://www.facebook.com/dj3091"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <span className="text-base px-2">Facebook</span>
          </a>
    
          <a
            href="https://www.instagram.com/jefaco/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <span className="text-base px-2">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-jeffrey-aco-a41751239/"
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
