import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const IconComponent = () => {
  return (
    <div className="icon-container">
      <FontAwesomeIcon icon={faHome} size="2x" />
      <FontAwesomeIcon icon={faUser} size="2x" />
      <FontAwesomeIcon icon={faCog} size="2x" />
    </div>
  );
};

export default IconComponent;
