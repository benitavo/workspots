'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { cafes, Cafe } from '@/data/cafes';

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  position: [number, number];
  city: string;
}

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);

  return null;
}

export default function MapComponent({ position, city }: MapProps) {
  const [cafesInCity, setCafesInCity] = useState<Cafe[]>([]);

  useEffect(() => {
    if (city && typeof city === 'string') {
      // Filtrer les cafés en fonction de la ville
      const filteredCafes = cafes.filter(cafe => cafe.city.toLowerCase() === city.toLowerCase());
      console.log('Filtered Cafes:', filteredCafes); // Log pour le débogage
      setCafesInCity(filteredCafes);
    }
  }, [city]);

  if (!position) return <div>Chargement de la carte...</div>;

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%', borderRadius: '12px' }}
    >
      <MapUpdater center={position} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position} icon={icon}>
        <Popup>Ici c’est {position[0].toFixed(2)}, {position[1].toFixed(2)} !</Popup>
      </Marker>
      {cafesInCity.length > 0 ? (
        cafesInCity.map(cafe => (
          <Marker key={cafe.id} position={[cafe.lat, cafe.lng]} icon={icon}>
            <Popup>
              <strong>{cafe.name}</strong><br />
              Adresse: {cafe.address}<br />
              Wifi: {cafe.wifi}/5<br />
              Bruit: {cafe.noise}/5<br />
              Commande min: {cafe.minOrder}
            </Popup>
          </Marker>
        ))
      ) : (
        <p>Aucun café trouvé dans cette ville.</p>
      )}
    </MapContainer>
  );
}
