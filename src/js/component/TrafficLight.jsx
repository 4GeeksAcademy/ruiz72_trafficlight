import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState(null);

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light blue ${color === 'blue' ? 'glow' : ''}`}
        onClick={() => handleClick('blue')}
      />
      <div
        className={`light red ${color === 'red' ? 'glow' : ''}`}
        onClick={() => handleClick('red')}
      />
      <div
        className={`light yellow ${color === 'yellow' ? 'glow' : ''}`}
        onClick={() => handleClick('yellow')}
      />
    </div>
  );
};

export default TrafficLight;