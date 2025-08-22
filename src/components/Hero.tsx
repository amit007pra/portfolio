import React from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon, CodeIcon, ServerIcon, DatabaseIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-orange-100/50 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-orange-100/30 blur-3xl"></div>
      </div>
      {/* Code symbols */}
      <div className="absolute top-20 left-10 opacity-10 text-4xl text-orange-900">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 text-4xl text-amber-900">
        &#123; &#125;
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-10 text-3xl text-orange-800">
        &lt;div&gt;
      </div>
      {/* Floating tech icons */}
      <div className="hidden md:block absolute top-1/4 left-1/4 text-orange-400/30 animate-pulse">
        <CodeIcon size={28} />
      </div>
      <div className="hidden md:block absolute bottom-1/3 right-1/3 text-amber-400/30 animate-pulse" style={{
      animationDelay: '1s'
    }}>
        <ServerIcon size={28} />
      </div>
      <div className="hidden md:block absolute top-2/3 left-1/3 text-orange-400/30 animate-pulse" style={{
      animationDelay: '2s'
    }}>
        <DatabaseIcon size={28} />
      </div>
      <div className="container relative mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-orange-100 rounded-full opacity-50"></div>
            <h1 className="relative text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm{' '}
              <span className="text-orange-500 relative">
                John Doe
                <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200/50 -z-10"></span>
              </span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I build exceptional and accessible digital experiences for the web.
            Specializing in creating applications that are both beautiful and
            functional.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-all duration-300 font-medium transform hover:-translate-y-1 hover:shadow-lg">
              Contact Me
            </a>
            <a href="#projects" className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 px-6 py-3 rounded-md transition-all duration-300 font-medium transform hover:-translate-y-1">
              View Projects
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors transform hover:scale-110">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors transform hover:scale-110">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors transform hover:scale-110">
              <TwitterIcon size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Avatar background effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-amber-200 rounded-lg blur-xl opacity-30 animate-pulse"></div>
            <div className="relative overflow-hidden shadow-xl">
              <img src="/ChatGPT_Image_Aug_22%2C_2025%2C_11_07_03_PM.png" alt="John Doe" className="w-64 h-auto md:w-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center mt-16">
        <a href="#about" className="flex items-center text-orange-500 hover:text-orange-700 transition-colors animate-bounce">
          <span className="mr-2">Scroll Down</span>
          <ArrowDownIcon size={20} />
        </a>
      </div>
    </section>;
}