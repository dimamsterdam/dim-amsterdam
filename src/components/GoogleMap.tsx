
import React, { useEffect, useRef } from 'react';

// Define interface for the google maps window object
declare global {
  interface Window {
    initMap?: () => void;
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a map once the component is mounted
    if (typeof window.google === 'undefined') {
      const script = document.createElement('script');
      // You need to add a Google Maps API key here
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Define the callback function globally
      window.initMap = () => {
        if (mapRef.current) {
          renderMap();
        }
      };
      
      document.head.appendChild(script);
      
      return () => {
        // Clean up the global callback
        window.initMap = undefined;
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      };
    } else if (mapRef.current) {
      renderMap();
    }
  }, []);
  
  const renderMap = () => {
    if (!mapRef.current || !window.google) return;
    
    // Amsterdam Panamalaan coordinates
    const position = { lat: 52.3726, lng: 4.9322 }; // Coordinates for Panamalaan 5f, Amsterdam
    
    const mapOptions = {
      center: position,
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ weight: "2.00" }]
        },
        {
          featureType: "all",
          elementType: "geometry.stroke",
          stylers: [{ color: "#9c9c9c" }]
        },
        {
          featureType: "all",
          elementType: "labels.text",
          stylers: [{ visibility: "on" }]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#adb9c4" }]
        }
      ]
    };
    
    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    
    // Add a marker for DIM's location
    const marker = new window.google.maps.Marker({
      position,
      map,
      animation: window.google.maps.Animation.DROP,
      title: 'DIM'
    });
    
    // Add an info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 8px; max-width: 200px;">
          <h3 style="margin: 0 0 8px; font-weight: bold;">DIM</h3>
          <p style="margin: 0 0 4px;">Panamalaan 5f</p>
          <p style="margin: 0;">1019 AS Amsterdam</p>
        </div>
      `
    });
    
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
    
    // Open info window by default
    infoWindow.open(map, marker);
  };
  
  return (
    <div 
      ref={mapRef} 
      className="w-full h-full min-h-[450px] bg-gray-200"
      aria-label="Google Maps showing DIM location"
    ></div>
  );
};

export default GoogleMap;
