import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

// Fictif des cafés dans une ville
const cafes = [
  {
    name: 'Café Paris',
    location: { lat: 48.8566, lng: 2.3522 }, // Paris
  },
  {
    name: 'Café Lyon',
    location: { lat: 45.7640, lng: 4.8357 }, // Lyon
  },
];

const Map = ({ city }: { city: string }) => {
  const [center, setCenter] = useState<LatLngExpression | null>(null);

  // Gérer le centre de la carte en fonction de la ville
  useEffect(() => {
    if (city.toLowerCase() === 'paris') {
      setCenter([48.8566, 2.3522]); // Paris
    } else if (city.toLowerCase() === 'lyon') {
      setCenter([45.7640, 4.8357]); // Lyon
    } else {
      setCenter([51.505, -0.09]); // Default, Londres
    }
  }, [city]);

  if (!center) {
    return <div>Chargement...</div>;
  }

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {cafes.map((cafe, index) => (
        <Marker key={index} position={cafe.location}>
          <Popup>{cafe.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
