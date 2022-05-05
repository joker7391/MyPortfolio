import React from "react";
import Navbar from "../../components/nav-footer/Navbar";
import Footer from "../../components/nav-footer/Footer";
import img1 from "../../images/test.jpg";
import Gear from "../../images/gear.png";
import Background from "../../images/insert-image-html-2.jpg";
import { Wave } from "react-animated-text";
import "../../styles/customstyles.css";
import { Link } from "react-router-dom";
import { Slide, Zoom, Fade } from 'react-reveal';
import BoxOne from "./components/BoxOne";

import BoxThree from "./components/BoxThree";
import ResponsiveContent from "./components/ResponsiveContent";

function Home() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Background})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="opacity-90"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-5 lg:flex lg:justify-between">

            <div className="lg:w-1/2">
              <div className="p-12 lg:flex lg:flex-col lg:justify-center lg:text-left">
                <h1 className="px-4 py-2 font-semibold text-white lg:text-4xl">
                  <Wave
                    text="Daniel Jeffrey Aco"
                    effect="verticalFadeIn"
                    effectDuration={1}
                    effectChange={0.2}
                    iterations={1}
                  />
                </h1>
                <hr className="invisible border-2 md:visible" />
                <h1 className="px-4 py-2 text-2xl tracking-tight text-white lg:text-3xl">
                  <Wave
                    text="FrontEnd Developer"
                    effect="verticalFadeIn"
                    effectDuration={1}
                    effectChange={0.2}
                    iterations={1}
                  />
                </h1>
                <h1 className="px-4 py-2 text-xl text-white lg:text-2xl">
                  <Wave
                    text="Since 2020 - 2022"
                    effect="verticalFadeIn"
                    effectDuration={1}
                    effectChange={0.2}
                    iterations={1}
                  />
                </h1>
                <div className="py-2">
                  <Link to="/about">
                    <button className="px-6 py-2 mt-4 mb-2 text-center text-white border-2 rounded-full lg:w-64 hover:bg-white hover:text-gray-700">
                      About me<span className="px-2 fa fa-arrow-right"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 p-10 ">
              <Zoom>
                <img className="lg:w-full lg:h-full shadow-md rounded-full" src={img1} alt="profile" />
              </Zoom>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl px-4 py-4 mx-auto mt-20 flex flex-col items-center">
        <Slide left>
          <div className="flex flex-row items-center justify-center">
            <img className="gearRotate" src={Gear} alt="rotating-gear" />
            <h1 className="text-2xl font-semibold text-gray-700 md:text-4xl lg:text-4xl">
              Skills Overview
          </h1>
          </div>
        </Slide>
        <Slide left>
          <div className="mt-5 text-center">
            <p className="px-4 py-8 text-xl">
              I've been a web developer for almost 2 years. but i'm still seeking
              to learn and gain new knowledge that will enhance my current skills
              and experience in web development.
          </p>
          </div>
        </Slide>
        <Fade left>
          <div className="flex-row mt-10 lg:flex">
            <div className="md:py-8 md:px-8">
              <div className="flex items-center justify-center">
                <BoxOne />
              </div>
            </div>
            
            <div className="lg:py-8 lg:ml-10">
              <div className="flex items-center justify-center">
                <BoxThree />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="px-4 py-4 mt-20 bg-gray-100">
        <Slide right>
          <div className="flex-row justify-between max-w-6xl mx-auto lg:flex">
            <ResponsiveContent />
          </div>
        </Slide>
      </div>
      <div className="flex-row justify-between max-w-6xl mx-auto lg:flex"></div>
      {/* <div>id="border" </div> */}
      <Footer />
    </div>
  );
}

export default Home;
