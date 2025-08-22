import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with drag-and-drop functionality.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 3,
    title: 'API Gateway Service',
    description: 'A microservice that handles authentication and routes requests to appropriate services.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'JWT', 'Docker'],
    liveUrl: '',
    githubUrl: '#'
  }, {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'frontend',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 5,
    title: 'Real-time Chat Application',
    description: 'A messaging platform with real-time updates and group chat functionality.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'fullstack',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 6,
    title: 'Weather Data API',
    description: 'A RESTful API that aggregates weather data from multiple sources.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'Redis', 'External APIs'],
    liveUrl: '',
    githubUrl: '#'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-20 px-4 bg-amber-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            <FilterButton active={activeFilter === 'all'} onClick={() => setActiveFilter('all')}>
              All
            </FilterButton>
            <FilterButton active={activeFilter === 'frontend'} onClick={() => setActiveFilter('frontend')}>
              Frontend
            </FilterButton>
            <FilterButton active={activeFilter === 'backend'} onClick={() => setActiveFilter('backend')}>
              Backend
            </FilterButton>
            <FilterButton active={activeFilter === 'fullstack'} onClick={() => setActiveFilter('fullstack')}>
              Full Stack
            </FilterButton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>;
}
function FilterButton({
  children,
  active,
  onClick
}) {
  return <button className={`px-5 py-2 rounded-full transition-colors ${active ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={onClick}>
      {children}
    </button>;
}
function ProjectCard({
  project
}) {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => <span key={index} className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
              {tech}
            </span>)}
        </div>
        <div className="flex justify-between">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-500 hover:text-orange-700 transition-colors">
              <span className="mr-1">Live Demo</span>
              <ExternalLinkIcon size={16} />
            </a>}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <span className="mr-1">Source Code</span>
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </div>;
}