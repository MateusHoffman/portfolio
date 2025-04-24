"use client";

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

interface ListProjectsProps {
  modal?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Te Amo Muito",
    description: "Crie uma homenagem personalizada para seu relacionamento com data, fotos e a música do casal, e deixe o QR Code revelar tudo!",
    image: "/projects/teamomuito.png",
    githubUrl: "https://github.com/MateusHoffman/teamomuito_client",
    liveUrl: "https://www.teamomuito.com.br/"
  },
];

export default function ListProjects({ modal = false }: ListProjectsProps) {
  const displayedProjects = modal ? projects : projects.slice(0, 2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {displayedProjects.map((project) => (
        <div
          key={project.id}
          className="border border-[#8C8C8C] border-opacity-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
        >
          <div className="aspect-video relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{project.description}</p>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 