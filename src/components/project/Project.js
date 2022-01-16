import React from "react";
import Navbar from "../nav-footer/Navbar";
import Footer from "../nav-footer/Footer";
import Pahiram from "../../images/pahiram.png";
import Covid from "../../images/covid.png";
import Gratchi from "../../images/gratchi.png";
import Barangay from "../../images/holy-spirit/barangay.png";
import { Bounce, Zoom } from 'react-reveal';

export default function Project() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl px-8 py-8 mx-auto">
        <Zoom>
          <h1 className="text-4xl font-bold text-center text-gray-600">
            My Projects
        </h1>
          <p className="py-4 text-xl text-center">
            Here are my projects. I've worked on the past years.
        </p>
        </Zoom>
        <div className="flex-row justify-between lg:flex">
          <Bounce left>
            <div className="my-8 image_main w-400 lg:mx-4">
              <img
                className="border-2 border-orange-600 rounded-lg"
                src={Pahiram}
                alt="projects"
              />
              <div className="image_overlay image_overlay_blur">
                <h1 className="py-8 text-3xl">Pahiram.ph</h1>
                <a
                  href="https://pahiram.ph/"
                  alt="pahiram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-2 border-2 rounded-full focus:outline-none hover:bg-white hover:text-gray-600">
                    View Website
                  <i className="px-2 fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </a>
              </div>
            </div>
          </Bounce>
          <Bounce right>
            <div className="my-8 image_main w-400 lg:mx-4">
              <img
                className="border-2 border-gray-500 rounded-lg"
                src={Covid}
                alt="projects"
              />
              <div className="image_overlay image_overlay_blur">
                <h1 className="py-8 text-2xl">Covid Central Command</h1>
                <a
                  href="https://pahiram.ph/covid-19"
                  alt="covid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-2 border-2 rounded-full focus:outline-none hover:bg-white hover:text-gray-600">
                    View Website
                  <i className="px-2 fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </a>
              </div>
            </div>
          </Bounce>
        </div>

        <div className="flex-row justify-between lg:flex">
          <Bounce left>
            <div className="my-8 image_main w-400 lg:mx-4">
              <img
                className="border-2 border-gray-500 rounded-lg"
                src={Gratchi}
                alt="projects"
              />
              <div className="image_overlay image_overlay_blur">
                <h1 className="py-8 text-3xl">Gratchi's Getaway</h1>
                <a
                  href="https://gratchi.com/"
                  alt="gratchi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-2 border-2 rounded-full focus:outline-none hover:bg-white hover:text-gray-600">
                    View Website
                  <i className="px-2 fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </a>
              </div>
            </div>
          </Bounce>
          <Bounce right>
            <div className="my-8 image_main w-400 lg:mx-4">
              <img
                className="border-2 border-orange-600 rounded-lg"
                src={Barangay}
                alt="projects"
              />
              <div className="image_overlay image_overlay_blur">
                <h1 className="py-8 text-3xl">Barangay Holy Spirit</h1>
                <a
                  href="/barangay"
                  alt="holy-spirit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-2 border-2 rounded-full focus:outline-none hover:bg-white hover:text-gray-600">
                    View Website
                  <i className="px-2 fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </a>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
      <Footer />
    </div>
  );
}
