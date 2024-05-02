
import React from 'react';
import Map from './components/Map';
import StopMarker from './components/StopMarker';
import DriverTracker from './components/DriverTracker';

const App = () => {
  const stops = [
    { lat: -1.939826787816454, lng: 30.0445426438232 }, // Nyabugogo
    { lat: -1.9355377074007851, lng: 30.060163829002217 }, // Stop A
    { lat: -1.9358808342336546, lng: 30.08024820994666 }, // Stop B
    { lat: -1.9489196023037583, lng: 30.092607828989397 }, // Stop C
    { lat: -1.9592132952818164, lng: 30.106684061788073 }, // Stop D
    { lat: -1.9487480402200394, lng: 30.126596781356923 }, // Stop E
    { lat: -1.9365670876910166, lng: 30.13020167024439 } // Kimironko
  ];

  return (
    <div>
      <Map stops={stops} />
      {stops.map((stop, index) => (
        <StopMarker key={index} index={index} />
      ))}
      <DriverTracker stops={stops} />
    </div>
  );
};

export default App;
