"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project, { CreateProject } from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-7xl">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1  md:grid-cols-2    gap-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <div className="flex justify-center w-full col-span-2">
          <Link href="https://github.com/vedantbhawsar">
            <Button>View more on github</Button>
          </Link>
        </div>

        {projectsData.length % 2 !== 0 && <CreateProject />}
      </div>
    </section>
  );
}
