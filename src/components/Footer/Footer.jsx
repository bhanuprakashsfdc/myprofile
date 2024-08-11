import React from 'react';
import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <footer className="mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem">
      <div className="footer-container text-center py-6 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
        <p>
          Copyright by 
          <a href="https://bhanuprakashsfdc.com/" className="transition-colors">Bhanuprakashsfdc.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
