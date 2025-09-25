import Link from "next/link";
import React from "react";
import AboutPara from "../components/AboutPara";
export default function About() {
  return (
    <>
      <AboutPara>
        I am a developer who is changing careers from owning a food business and
        freelancing{" "}
        <Link
          className="text-highlight-blue hover:text-dark-blue"
          href={"food-content"}>
          photography
        </Link>
        . I am passionate about building accesible, responsive projects. I like
        backend as much as frontend, I enjoy writing logic and making clean code
        as much as making cool interactive interfaces.
      </AboutPara>
      <AboutPara>
        I made a MERN app for an accountant firm that helped with Project
        Management. The app dealt with their monthly and yearly tax pipelines
        and kept the data for up their 400 clients. The app was up and running
        for months until it had a security breach, I learned the importance of a
        team of experts.
      </AboutPara>
      <AboutPara>
        In my previous careers I had the opportunity to lead small teams. I had
        to manage expectations and keep the scope of the projects within reach.
        I can handle pressure with tight deadlines and dynamic environments
        where things go off the plan and the project still needs to be delivered
        on time.
      </AboutPara>
      <AboutPara>
        In my me-time I enjoy playing guitar, cooking fancy meals, lifting heavy
        weights and playing Elden Ring.
      </AboutPara>
    </>
  );
}
