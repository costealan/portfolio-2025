import React from "react";
import { ProjectWrapper } from "../components/Projectwrapper";
import StyledLink from "../components/StyledLink";

export default function Page() {
  return (
    <>
      <ProjectWrapper
        title="Project Management app for Accountant firm"
        stack="MongoDB, Express, React, Node.js">
        <p className="text-base-blue">
          This app was made for an Accountant firm to handle their customers tax
          declaration workload. The API handles CRUD operations and has routes
          for admin and employee. The frontend handles state through Zustand
          stores, the fetch requests are made through React Query a toast
          message communicates the result of the update. To keep a fast user
          experience the front-end paginated the displayed results. Here is a{" "}
          <StyledLink href="https://accounting-demo-coste.netlify.app">
            Demo
          </StyledLink>{" "}
          Renders server might take 15 seconds to start
        </p>
      </ProjectWrapper>
      <ProjectWrapper
        title="Data Structures, Algorithms and recursion"
        stack="Ruby">
        <p className="text-base-blue">
          Series of projects from The Odin Project where I have implemented{" "}
          <StyledLink href={"https://github.com/costealan/linked_list"}>
            Linked-List
          </StyledLink>
          ,{" "}
          <StyledLink href="https://github.com/costealan/hash_map">
            Hash-Map
          </StyledLink>
          ,{" "}
          <StyledLink href="https://github.com/costealan/binary_tree">
            Binary Search Tree
          </StyledLink>{" "}
          and{" "}
          <StyledLink href="https://github.com/costealan/knights_travails">
            Graph
          </StyledLink>{" "}
          data structures. For the BST and Graph I have used Breath First Search
          and Depth First search.
        </p>
      </ProjectWrapper>
      <ProjectWrapper
        title="Rock{theCode} Bootcamp projects"
        stack="HTML, CSS, Javascript, React, Node.js, Express, MongoDB">
        <p className="text-base-blue text-lg">
          I took an intensive bootcamp where I learned how to make{" "}
          <StyledLink
            href="https://rtc-webresponsive-alancoste.netlify.app
">
            HTML and CSS
          </StyledLink>{" "}
          pixel perfect responsive sites , I have experience making single page
          apps with{" "}
          <StyledLink href="https://dom-manipulation-js-coste.netlify.app/">
            Javascript DOM
          </StyledLink>{" "}
          manipulation, I also worked with{" "}
          <StyledLink href="https://github.com/costealan/rtc-games">
            React
          </StyledLink>
          . I made{" "}
          <StyledLink href="https://github.com/costealan/rtc-backend3">
            CRUD servers
          </StyledLink>{" "}
          using Nodejs, Express and MongoDB.
        </p>
      </ProjectWrapper>
      <ProjectWrapper title="This page!" stack="Next.js, Tailwind">
        <p className="text-base-blue"></p>
      </ProjectWrapper>
    </>
  );
}
