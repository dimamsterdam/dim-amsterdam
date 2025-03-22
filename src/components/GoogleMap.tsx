
import React, { useEffect, useRef } from 'react';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a map once the component is mounted
    if (typeof window.google === 'undefined') {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
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
        document.head.removeChild(script);
      };
    } else if (mapRef.current) {
      renderMap();
    }
  }, []);
  
  const renderMap = () => {
    // Utrecht coordinates
    const position = { lat: 52.0907, lng: 5.1214 };
    
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
    
    const map = new google.maps.Map(mapRef.current, mapOptions);
    
    // Add a marker for DIM's location
    const marker = new google.maps.Marker({
      position,
      map,
      animation: google.maps.Animation.DROP,
      title: 'DIM'
    });
    
    // Add an info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 8px; max-width: 200px;">
          <h3 style="margin: 0 0 8px; font-weight: bold;">DIM</h3>
          <p style="margin: 0 0 4px;">Nieuwegracht 23</p>
          <p style="margin: 0;">3512 LC Utrecht</p>
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
      className="w-full h-[450px] bg-gray-200"
      aria-label="Google Maps showing DIM location"
    ></div>
  );
};

// Add global declaration for the Google Maps callback
declare global {
  interface Window {
    initMap?: () => void;
    google?: any;
  }
}

export default GoogleMap;
