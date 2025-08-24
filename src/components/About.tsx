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
              I'm Amit Prasad, a passionate DevOps Engineer with over 5 years
              of experience in designing, implementing, and managing scalable
              infrastructure and CI/CD pipelines. My expertise lies in cloud
              platforms like AWS and Azure, containerization with Docker and
              Kubernetes, and automation using Terraform and Ansible.
            </p>
            <p className="text-gray-600 mb-4">
              I thrive in collaborative environments and love working closely
              with development teams to streamline deployments and improve
              system reliability. My goal is to leverage technology to solve
              complex problems and drive business success.
            </p>
            <p className="text-gray-600">
              When I'm not working, I enjoy contributing to open-source
              projects, exploring new tech trends, and sharing knowledge with
              the community through blogging and speaking at tech meetups.
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
                  <p className="text-gray-700">Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCapIcon size={20} className="text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Education</p>
                  <p className="text-gray-700">
                    M.Tech in Computer systems and security
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