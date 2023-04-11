"use client";

import { useCallback, useEffect, useRef } from "react";

import ProjectCard from "./ProjectCard";

import Lenis from "@studio-freight/lenis";

export default function Projects({ projects }) {
  const sectionRef = useRef(null);
  const ulRef = useRef(null);

  return (
    <section
      className="relative w-full h-auto overflow-y-visible"
      ref={sectionRef}
    >
      {/* <ul
        className="relative inline overflow-y-visible whitespace-nowrap"
        ref={ulRef}
      >
        {projects.map((project, index) => (
          <li
            key={project._id}
            className={`lis inline-block ml-8 ${
              index + 1 == projects.length ? "mr-96" : "mr-20"
            }`}
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul> */}
    </section>
  );
}
