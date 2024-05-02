
import React from 'react';

const StopMarker = ({ index }) => {
  return (
    <div>
      Stop {String.fromCharCode(65 + index)}
    </div>
  );
};

export default StopMarker;
