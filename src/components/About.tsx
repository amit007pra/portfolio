import React from 'react';
import { BriefcaseIcon, GraduationCapIcon, MapPinIcon } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          About Me
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Who I Am
            </h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate Full Stack Developer with over 5 years of
              experience creating web applications and digital experiences. I
              specialize in JavaScript technologies across the stack and have a
              strong foundation in modern frameworks and libraries.
            </p>
            <p className="text-gray-600 mb-4">
              My approach combines technical expertise with creative
              problem-solving to build scalable, user-friendly applications. I'm
              dedicated to writing clean, efficient code and continuously
              expanding my skill set in this ever-evolving field.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me hiking local trails,
              experimenting with new cooking recipes, or contributing to open
              source projects.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Personal Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <BriefcaseIcon size={20} className="text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="text-gray-700">5+ Years</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinIcon size={20} className="text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-700">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCapIcon size={20} className="text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Education</p>
                  <p className="text-gray-700">
                    B.S. Computer Science, Stanford University
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors font-medium">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}