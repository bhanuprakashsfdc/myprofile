import React from 'react';
import './LinesBackground.css'; // Make sure to import your CSS file

const LinesBackground = () => {
  return (
    <div className="bg-lines fixed inset-0 -z-1 md:max-xl:max-w-[45rem] xl:max-w-60rem 2xl:max-w-container mx-auto max-sm:px-8 sm:max-xl:px-12">
      <div className="line-wrapper max-w-[1130px] w-full h-full ml-auto 2xl:-mr-24 relative flex justify-between">
        <div className="line1 before:animate-top_bottom"></div>
        <div className="line2 before:bottom-0 before:animate-bottom_top before:animate-delay-3s"></div>
        <div className="line3 before:animate-top_bottom before:animate-delay-3s"></div>
        <div className="line4 before:bottom-0 before:animate-bottom_top before:animate-delay-2s"></div>
      </div>
    </div>
  );
};

export default LinesBackground;
