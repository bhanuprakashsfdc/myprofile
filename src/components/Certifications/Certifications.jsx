import React from 'react';
import './Certifications.css';
import { CERTIFICATIONS } from '../../constants/constants';

const Certifications = () => {
  return (
    <div className="portfolio-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {CERTIFICATIONS.map((certification, index) => (
        <div key={index} className="certification-item text-center">
          {certification.imageSrc && (
            <img
              src={certification.imageSrc}
              alt={certification.altText}
              className="w-32 h-32 mx-auto mb-4"
            />
          )}
          <h4 className="text-lg font-semibold">{certification.title}</h4>
          <p className="text-sm text-gray-600">Earned on: {certification.dateEarned}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
