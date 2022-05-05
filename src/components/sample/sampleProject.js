import React from "react";
import Navbar from "../nav-footer/Navbar";
import Footer from "../nav-footer/Footer";
import Todo from "../../images/to-do.png";
import Blog from "../../images/blogs.jpg";
import Bread from "../breadcrumbs/BreadCrumbs";
import { Link } from "react-router-dom";
import { Slide, Zoom } from "react-reveal";

function SampleProject() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl px-8 py-8 mx-auto">
        <div className="py-8">
          <Bread />
        </div>
        <Zoom>
          <h1 className="text-4xl font-bold text-center text-gray-600">
            React Projects
          </h1>
          <p className="py-4 text-xl text-center">
            I've worked using React.
          </p>
        </Zoom>
        <div className="grid grid-flow-col grid-rows-2">
          <Slide left>
            <div>
              <div className="w-full my-4 image_main lg:mx-4">
                <img
                  className="border-2 border-orange-600 rounded-lg"
                  src={Todo}
                  alt="projects"
                />
                <div className="image_overlay image_overlay_blur">
                  <h1 className="py-8 text-3xl">Functional Todo List</h1>
                </div>
              </div>
              <div className="lg:mx-4">
                <Link
                  to="/project-samples/todo-list"
                  className="px-2 py-2 text-white bg-gray-700 border-2 border-gray-700 rounded-lg hover:bg-white hover:text-gray-700"
                >
                  View Todo
                </Link>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div>
              <div className="w-full my-4 image_main lg:mx-4">
                <img
                  className="w-full border-2 border-orange-600 rounded-lg"
                  src={Blog}
                  alt="projects"
                />
                <div className="image_overlay image_overlay_blur">
                  <h1 className="py-8 text-3xl">Blogs using Reddit API</h1>
                </div>
              </div>
              <div className="lg:mx-4">
                <Link
                  to="/project-samples/blogs"
                  className="px-2 py-2 text-white bg-gray-700 border-2 border-gray-700 rounded-lg hover:bg-white hover:text-gray-700"
                >
                  View Blogs
                </Link>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SampleProject;
