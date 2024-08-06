import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="custom_cursor_one fixed"
        style={{
          top: position.y - 16, // Adjust based on cursor size
          left: position.x - 16, // Adjust based on cursor size
        }}
      ></div>
      <div
        className="custom_cursor_two fixed"
        style={{
          top: position.y - 1, // Center of the small cursor
          left: position.x - 1, // Center of the small cursor
        }}
      ></div>
    </div>
  );
};

export default Cursor;
