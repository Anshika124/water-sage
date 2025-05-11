import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set up custom blue marker
const blueIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Sample data for pinned issues in different regions of India
const issuesData = [
  {
    id: 1,
    title: 'Water Shortage in Rajasthan',
    description: 'Severe drought has affected the water supply in the desert regions of Rajasthan.',
    position: [27.0238, 74.2179], // Coordinates for Rajasthan
  },
  {
    id: 2,
    title: 'Flooding in Kerala',
    description: 'Monsoon floods have caused widespread destruction and water contamination.',
    position: [10.8505, 76.2711], // Coordinates for Kerala
  },
  {
    id: 3,
    title: 'new',
    description: 'new ew.',
    position: [26.327499389648438, 82.89501953125], // Coordinates for Kerala
  },

];

const MapWithPins = () => {
  return (
    <div style={mapPageStyle}>
      <h2 style={{ color: '#1E90FF', textAlign: 'center', margin: '20px' }}>Water Issues in India</h2>
      <MapContainer
        center={[20.5937, 77.9629]} // Center of India
        zoom={5}
        style={{ height: '500px', width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

        {issuesData.map((issue) => (
          <Marker key={issue.id} position={issue.position} icon={blueIcon}>
            <Popup>
              <strong>{issue.title}</strong>
              <p>{issue.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// Basic page style with a blue theme
const mapPageStyle = {
  backgroundColor: '#E6F2FF',
  padding: '70px 20px 20px 20px',
  borderRadius: '10px',
  maxWidth: '900px',
  margin: 'auto',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

export default MapWithPins;
