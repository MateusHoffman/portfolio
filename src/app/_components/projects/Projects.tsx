"use client";

import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ListProjects from './_components/ListProjects';
import ModalProjects from './ModalProjects';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description goes here. Explain what the project does and what technologies were used.",
    image: "/project-image.jpg",
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-demo.com"
  },
  // Add more projects here
];

export default function Projects() {
  const [isOpenModalProjects, setIsOpenModalProjects] = useState(false);

  function handleSeeMore() {
    setIsOpenModalProjects(true);
  }

  return (
    <>
      <section className="md:w-3/5 2xl:w-5/12 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
        <header className="px-4 pt-4 md:px-6 md:pt-6">
          <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
            Projetos
          </h1>
        </header>
        <main className="px-4 md:px-6 py-4">
          <ListProjects />
        </main>
        <footer className="px-4 md:px-6 py-2 border-t-[1px] border-t-[#8C8C8C] border-opacity-20 hover:bg-[#8c8c8c1a]">
          <button onClick={handleSeeMore} className="w-full text-center">
            <span className="text-base text-[#000000BF] font-semibold">
              Ver mais...
            </span>
          </button>
        </footer>
      </section>
      <ModalProjects
        isOpen={isOpenModalProjects}
        setIsOpen={setIsOpenModalProjects}
      />
    </>
  );
} 