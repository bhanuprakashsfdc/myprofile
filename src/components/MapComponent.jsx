import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full overflow-hidden border-10 border-platinum dark:border-greyBlack embed-map h-80 2xl:h-96 rounded-2xl">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25908.703277839155!2d-74.18208878159237!3d40.640176526919696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1699271377092!5m2!1sen!2sbd"
        aria-label="Contact Map"
        title="Google Map"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
