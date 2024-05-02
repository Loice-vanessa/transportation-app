
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = ({ stops }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = { lat: -1.939826787816454, lng: 30.0445426438232 };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={12}
    >
      {stops.map((stop, index) => (
        <Marker
          key={index}
          position={{ lat: stop.lat, lng: stop.lng }}
          label={(index + 1).toString()}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
