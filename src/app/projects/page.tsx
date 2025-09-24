import React from "react";
import { ProjectWrapper } from "../components/Projectwrapper";

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
          experience the front-end paginated the displayed results. Here is a
          <em className="text-highlight-blue">demo</em>
        </p>
      </ProjectWrapper>
      <ProjectWrapper
        title="Data Structures, Algorithms and recursion"
        stack="Ruby">
        <p className="text-base-blue">
          Series of projects from The Odin Project where I have implemented
          Linked-List, Hash-Map, Binary Search Tree and Graph data structures.
          For the BST and Graph I have used Breath First Search and Depth First
          search.
        </p>
      </ProjectWrapper>
      <ProjectWrapper
        title="Rock{theCode} Bootcamp projects"
        stack="HTML, CSS, Javascript, React, Node.js, Express, MongoDB">
        <p className="text-base-blue text-lg">
          I took an intensive bootcamp where I learned how to make pixel perfect
          responsive sites, I have experience making single page apps with
          Javascript DOM manipulation and with React. I also worked making
          backend systems
        </p>
      </ProjectWrapper>
      <ProjectWrapper title="Rock{theCode} Bootcamp projects" stack="CSS">
        <p className="text-base-blue">
          I took an intensive bootcamp where I learned how to make pixel perfect
          responsive sites, I have experience making single page apps with
          Javascript DOM manipulation and with React. I also worked making
          backend systems
        </p>
      </ProjectWrapper>
    </>
  );
}
