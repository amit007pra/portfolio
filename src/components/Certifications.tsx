import React from 'react';
import { AwardIcon, CalendarIcon, ExternalLinkIcon } from 'lucide-react';
export function Certifications() {
  const certifications = [{
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2022',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    url: '#'
  }, {
    id: 2,
    title: 'Professional Full Stack Engineer',
    issuer: 'Meta',
    date: 'Aug 2022',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    url: '#'
  }, {
    id: 3,
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'Mar 2022',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    url: '#'
  }, {
    id: 4,
    title: 'React Developer Certification',
    issuer: 'freeCodeCamp',
    date: 'Nov 2021',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    url: '#'
  }];
  return <section id="certifications" className="py-20 px-4 bg-orange-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map(cert => <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden bg-orange-50 flex items-center justify-center">
                <img src={cert.image} alt={cert.title} className="w-16 h-16 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {cert.title}
                </h3>
                <div className="flex items-center mb-2 text-gray-600">
                  <AwardIcon size={16} className="mr-2" />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <CalendarIcon size={16} className="mr-2" />
                  <span>{cert.date}</span>
                </div>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-500 hover:text-orange-700 transition-colors">
                  <span className="mr-1">View Certificate</span>
                  <ExternalLinkIcon size={16} />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}