import React from 'react';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out to me through any of the contact details below.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-green-700 transition">
            <Email className="text-green-800" />
            <a href="mailto:salabhads@gmail.com" className="underline">
              salabhads@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-green-700 transition">
            <Phone className="text-green-800" />
            <span>+91 77360 53760</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg text-gray-700">
            <LocationOn className="text-green-800" />
            <span>Calicut, Kerala</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
