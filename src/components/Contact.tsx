import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me for any questions, opportunities, or
              just to say hello! I'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-full mr-4">
                  <MailIcon size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Email
                  </h4>
                  <a href="mailto:john.doe@example.com" className="text-gray-700 hover:text-orange-500 transition-colors">
                    john.doe@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-full mr-4">
                  <PhoneIcon size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Phone
                  </h4>
                  <a href="tel:+1234567890" className="text-gray-700 hover:text-orange-500 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-full mr-4">
                  <MapPinIcon size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Location
                  </h4>
                  <p className="text-gray-700">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="John Smith" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Job Opportunity" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Your message here..." required></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors font-medium">
                  <span className="mr-2">Send Message</span>
                  <SendIcon size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
}