import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "../../../images/holy-spirit/gasoline.png";
import Story from "../../../images/holy-spirit/techy.jpg";
import Events from "../../../images/holy-spirit/event.jpg";
import PublicService from "../../../images/holy-spirit/serve.png";
import Captain from "../../../images/holy-spirit/captain.png";
import Building from "../../../images/holy-spirit/building.jpg";
import Awards from "../../../images/holy-spirit/award.png";

function holySpirit() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center items-center lg:justify-start lg:py-24">
              <h1 className="text-6xl text-white uppercase text-center font-semibold py-8 px-20 lg:px-0">
                Barangay Holy Spirit
              </h1>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="max-w-6xl mx-auto py-10">
          <h1 className="text-center text-4xl">Announcements</h1>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10 shadow-lg">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url(${Background})`,
                }}
                title="Announcement One"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    City Hall
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Announcement One
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10 shadow-lg">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url(${Background})`,
                }}
                title="Announcement Two"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Barangay
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Announcement Two
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10 shadow-lg">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url(${Background})`,
                }}
                title="Announcement three"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Others
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Announcement three
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-6xl mx-auto pb-10">
          <h1 className="text-center text-4xl">Services</h1>

          <div className="lg:flex">
            {/* Directory */}
            <div className="my-8 mx-12 image_main w-400 lg:mx-4 shadow-lg">
              <img
                className="border-2 border-gray-600 rounded-lg"
                src={Story}
                alt="projects"
              />
              <div className="image_overlay image_overlay_blur">
                <h1 className="py-8 text-3xl">Directories</h1>
                <a
                  href="/directory"
                  alt="directory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-2 border-2 rounded-full focus:outline-none hover:bg-white hover:text-gray-600">
                    View Directory
                    <i
                      className="px-2 fa fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                </a>
              </div>
            </div>

            {/* About */}
            <div className="my-8 mx-12 image_main w-400 lg:mx-4 shadow-lg">
              <img
                className="border-2 border-gray-600 rounded-lg"
                src={Events}
                alt="projects"
              />
              <div className="image_overlay image_overlay_blur">
                <h1 className="py-8 text-3xl">About Us</h1>
                <a
                  href="/about-holyspirit"
                  alt="about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-2 border-2 rounded-full focus:outline-none hover:bg-white hover:text-gray-600">
                    View About
                    <i
                      className="px-2 fa fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                </a>
              </div>
            </div>

            {/* Public Service */}
            <div className="my-8 mx-12 image_main w-400 lg:mx-4 shadow-lg">
              <img
                className="border-2 border-gray-600 rounded-lg"
                src={PublicService}
                alt="projects"
              />
              <div className="image_overlay image_overlay_blur">
                <h1 className="py-8 text-3xl">Public Services</h1>
                <a
                  href="/public"
                  alt="public-service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-2 border-2 rounded-full focus:outline-none hover:bg-white hover:text-gray-600">
                    View Public Services
                    <i
                      className="px-2 fa fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barangay Captain */}
        <div className="max-w-6xl mx-auto pb-5">
          <h1 className="text-center lg:text-left lg:px-0 text-4xl px-4">
            Barangay Captain of Holy Spirit
          </h1>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10 shadow-lg">
              <div
                className="h-64 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url(${Captain})`,
                }}
                title="Captain"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-3xl mb-2">
                    Felicito A Valcimona
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Building})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-6xl mx-auto my-10">
            <h1 className="px-8 py-8 text-white text-center text-4xl tracking-tight">
              Barangay Holy Spirit Quick Facts
            </h1>
            <div className="text-center tracking-tight text-white lg:flex justify-center items-center">
              <div className="py-6 lg:px-8">
                <p className="text-5xl font-semibold">322</p>
                <p className="text-3xl">Hectares</p>
              </div>
              <div className="py-6 lg:px-8">
                <p className="text-5xl font-semibold">158</p>
                <p className="text-3xl">Streets</p>
              </div>
              <div className="py-6 lg:px-8">
                <p className="text-5xl font-semibold">82</p>
                <p className="text-3xl">Puroks</p>
              </div>
              <div className="py-6 lg:px-8">
                <p className="text-5xl font-semibold">115,984</p>
                <p className="text-xl">Total Population (NSO 2018)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Awatds */}
        <div className="max-w-6xl mx-auto pb-10">
          <h1 className="text-center lg:text-left lg:px-0 text-5xl px-4">
            Awards & Achievements
          </h1>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10 shadow-lg">
              <div
                className="h-64 lg:h-auto lg:w-3/6 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url(${Awards})`,
                }}
                title="Captain"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-gray-700 py-2 text-base text-justify">
                    2016 - Hall of Fame for Barangay Seal of Good Housekeeping,
                    DILG Quezon City, Novotel Manila, Araneta Center, QC during
                    the 22nd QC Barangay Day Celebration, September 21, 2017.
                  </p>
                  <p className="text-gray-700 py-2 text-base text-justify">
                    2015 - Dangal ng Lungsod for Barangay Seal of Good
                    Housekeeping, DILG Quezon City, Crowne Plaza Hotel, Ortigas
                    Ave., QC during the 21st QC Barangay Day Celebration,
                    September 21, 2016
                  </p>
                  <p className="text-gray-700 py-2 text-base text-justify">
                    2015 - Gulayan At Bulaklakan for - Gold Plaque and 100,000
                    PHP, Search and Award for the Outstanding Farmers of the
                    Philippines as Best LGU Operated Facility, Junior Chamber
                    International and the Universal Harvester, January 30, 2015.
                  </p>
                  <p className="text-gray-700 py-2 text-base text-justify">
                    2015 - Grand Winner Category A. Barangay Power 2014,
                    Cleanest and Best Barangay in Solid Waste Management, March
                    12, 2015, MMFF Cinema, Makati City.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default holySpirit;
