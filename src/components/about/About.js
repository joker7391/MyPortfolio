import React from "react";
import Navbar from "../nav-footer/Navbar";
import Footer from "../nav-footer/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import profile from "../../images/test2.jpg";
import Background from "../../images/insert-image-html-2.jpg";
import { Wave } from "react-animated-text";
import { Fade } from "react-reveal";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-300">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Background})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
          className="mb-5 lg:flex"
        >
          <Fade left>
            <div className="lg:w-1/3 p-20">
              <img className="w-full mb-24 rounded-full " src={profile} alt="profile" />
            </div>
          </Fade>
          <div className="text-center lg:py-24 lg:px-20 lg:w-2/3 lg:text-left">
            <Fade right>
              <p className="px-8 py-8 text-2xl text-gray-400 lg:text-4xl lg:text-justify">
                Hi, I am Daniel Jeffrey Aco, studying Information Technology a
                graduating student. Im a React Frontend Developer.
              </p>
            </Fade>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h3 className="font-semibold vertical-timeline-element-title">
                <Wave
                  text="TicketNation.ph"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <Wave
                  text="Sept 2020 - Present"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h4>
              <p>
                <Wave
                  text="Ticket Nation"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Aug 2019 - Apr 2020"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h3 className="font-semibold vertical-timeline-element-title">
                <Wave
                  text="Junior FrontEnd Developer"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h3>
              <p>
                <Wave
                  text="Pahiram.ph Corp"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </p>
            </VerticalTimelineElement>
          

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - Present"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h3 className="font-semibold vertical-timeline-element-title">
                <Wave
                  text="Bachelor of Science in Information Technology"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <Wave
                  text="STI College GlobalCity"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h4>
              <p>
                <Wave
                  text="Bonifacio Global City, Taguig"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            />
          </VerticalTimeline>
        </div>
      </div>

      <Footer />
    </>
  );
}
