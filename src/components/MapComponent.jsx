import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full overflow-hidden border-10 border-platinum dark:border-greyBlack embed-map h-80 2xl:h-96 rounded-2xl">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1128.5150564659484!2d79.44765025216917!3d13.652602003192184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4a37e8cbb1ad%3A0x11c84f655250fcdb!2sSri%20Pradha%20Hills!5e1!3m2!1sen!2sin!4v1723253364052!5m2!1sen!2sin"
        aria-label="Contact Map"
        title="Google Map"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
