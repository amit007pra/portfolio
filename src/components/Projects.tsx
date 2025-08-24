import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'AI Job Agent',
    description: 'An AI-powered tool that automates your job application process. It integrates with Gmail to send interview or job-related emails, respond smartly using AI, send personalized job applications (with resume and cover letter), and follow up automatically — all through an easy-to-use interface.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fchat-bot-white-background&psig=AOvVaw07BjbhVMDlROwwH7W-lBG7&ust=1756136960155000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDLmI_mo48DFQAAAAAdAAAAABAE',
    category: 'AI',
    technologies: ['ChatGPT', 'Python', 'Suprabase', 'Gmail API'],
    liveUrl: '#',
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