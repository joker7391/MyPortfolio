import React from "react";
import Navbar from "../nav-footer/Navbar";
import Footer from "../nav-footer/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import profile from "../../images/test2.png";
import Background from "../../images/code-background.jpg";
import { Wave } from "react-animated-text";
import { Fade } from 'react-reveal';

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
            <div className="lg:w-1/3">
              <img className="w-full" src={profile} alt="profile" />
            </div>
          </Fade>
          <div className="text-center lg:py-24 lg:px-20 lg:w-2/3 lg:text-left">
            <Fade right>
              <p className="px-8 py-8 text-2xl text-gray-400 lg:text-4xl lg:text-justify">
                Hi I'm Jester Merida, no
                Computer Science or Information Technology background but still
                achieve a senior frontend level in programming. My past
                experiences was the key to my success and also to my former boss
                who was my mentor. Still i keep on updating myself to enhance my current
                skills and experiences to always adapt on new technologies that will be
                released in the near future.
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
                  text="Solutions Developer"
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
                  text="PCCW Solutions"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Oct 2017 - Apr 2020"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h3 className="font-semibold vertical-timeline-element-title">
                <Wave
                  text="Senior FrontEnd Developer"
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
              date="Oct 2015 - Apr 2017"
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
                  text="iFortress Solutions"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2012 - 2014"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h3 className="font-semibold vertical-timeline-element-title">
                <Wave
                  text="Study Programming"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h3>
              <p>
                <Wave
                  text="Tutorials, Youtubes, Self Study, Reading Documentations"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2012"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h3 className="font-semibold vertical-timeline-element-title">
                <Wave
                  text="Vocational Course"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <Wave
                  text="Computer Technician"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h4>
              <p>
                <Wave
                  text="Guadalupe Makati City"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2009-2011"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h3 className="font-semibold vertical-timeline-element-title">
                <Wave
                  text="Associate in Aircraft Maitenance Technology"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <Wave
                  text="Philippine State College of Aeronautics"
                  effect="verticalFadeIn"
                  effectDuration={0.3}
                  effectChange={0.1}
                  iterations={1}
                />
              </h4>
              <p>
                <Wave
                  text="Pasay City"
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
