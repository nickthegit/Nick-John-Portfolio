"use client";

import { useCallback, useEffect } from "react";

import Link from "next/link";

export default function Projects({ projects }) {
  return (
    <section className="relative h-auto w-full overflow-x-scroll">
      <ul className="relative overflow-x-scroll inline whitespace-nowrap">
        {projects.map((project, index) => (
          <li
            key={project._id}
            className={`w-[720px] bg-red-200 inline-block ml-8 ${
              index + 1 == projects.length ? "mr-96" : "mr-20"
            }`}
          >
            <Link href={`/work/${project.slug}`}>
              <img
                src="https://via.placeholder.com/300x400"
                alt=""
                className="w-[720px] h-[540px] object-cover"
              />
              <h2>
                {project.title} {index + 1} / {projects.length}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
