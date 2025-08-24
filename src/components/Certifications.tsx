import React from 'react';
import { AwardIcon, CalendarIcon, ExternalLinkIcon } from 'lucide-react';
export function Certifications() {
  const certifications = [{
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services Training and Certification',
    date: 'May 2025',
    image: 'hhttps://images.credly.com/size/160x160/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    url: 'https://www.credly.com/badges/71fa9d60-6084-4c64-85e6-db370283cf8c/public_url'
  }, {
    id: 2,
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Feb 2025',
    image: 'https://images.credly.com/size/160x160/images/ce32b151-2075-4463-8746-c2fc0e19be9e/converted20250612-28-pgnd8h.png',
    url: 'https://learn.microsoft.com/en-us/users/amitprasad-9321/credentials/2d704cbe522cc682?ref=https%3A%2F%2Fwww.credly.com%2F'
  }, {
    id: 3,
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    date: 'May 2025',
    image: 'https://images.credly.com/size/160x160/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
    url: 'https://www.credly.com/earner/earned/badge/fcb3515d-6198-4276-9b70-d3c0b13da531'
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