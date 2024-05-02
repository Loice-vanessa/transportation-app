
import React, { useState, useEffect } from 'react';

const DriverTracker = ({ stops }) => {
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const [eta, setEta] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStopIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < stops.length) {
          setEta(calculateETA(stops[nextIndex]));
          return nextIndex;
        } else {
          clearInterval(timer);
          return prevIndex;
        }
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(timer);
  }, [stops]);

  const calculateETA = (nextStop) => {
    // Calculate ETA based on constant average speed
    const averageSpeed = 30; // in km/h
    const distance = getDistance(stops[currentStopIndex], nextStop);
    const etaInSeconds = (distance / averageSpeed) * 3600;
    return etaInSeconds;
  };

  const getDistance = (stop1, stop2) => {
    // Calculate distance between two points using Haversine formula
    const R = 6371; // Radius of the Earth in km
    const lat1 = stop1.lat;
    const lon1 = stop1.lng;
    const lat2 = stop2.lat;
    const lon2 = stop2.lng;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      {eta && (
        <div>
          Estimated time to next stop: {Math.round(eta / 60)} minutes
        </div>
      )}
    </div>
  );
};

export default DriverTracker;
