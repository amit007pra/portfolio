import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-orange-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-orange-200 mt-2">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/amit007pra" target="_blank" rel="noopener noreferrer" className="text-orange-200 hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/amit-prasad12/" target="_blank" rel="noopener noreferrer" className="text-orange-200 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-200 hover:text-white transition-colors" aria-label="Twitter">
              <TwitterIcon size={24} />
            </a>
            <a href="mailto:amitprasad@gmail.com" className="text-orange-200 hover:text-white transition-colors" aria-label="Email">
              <MailIcon size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-orange-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-orange-200 text-sm mb-4 md:mb-0">
            © {currentYear} Amit Prasad. All rights reserved.
          </p>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a href="#about" className="text-orange-200 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-orange-200 hover:text-white transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-orange-200 hover:text-white transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-orange-200 hover:text-white transition-colors text-sm">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-orange-200 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>;
}