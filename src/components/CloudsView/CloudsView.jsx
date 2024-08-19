import React from 'react';
import { CLOUDS_DATA } from '../../constants/constants';

const CloudsView = () => {
  return (
    <div data-scroll-index="4" id="cloud-exposure">
      <div className="cloud-section portfolio-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black section-name border-b-2 border-theme">
          SALESFORCE CLOUD EXPOSURE
        </div>

        <div className="clouds-container mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLOUDS_DATA.map((cloud, index) => (
            <div key={index} className="cloud-item flex items-center gap-3 p-4 bg-gray-800 rounded-lg">
              <i className={`${cloud.icon} text-2xl text-theme`}></i>
              <span className="text-black font-medium">{cloud.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudsView;
