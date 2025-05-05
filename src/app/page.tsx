'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

export default function Home() {
  const [city, setCity] = useState('');
  const [position, setPosition] = useState<[number, number] | null>([38.7167, -9.1393]); // Lisbonne par défaut
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null);

    if (!city.trim()) {
      setError("Merci d'entrer un nom de ville.");
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
      } else {
        setError("Ville non trouvée. Essayez une autre orthographe.");
      }
    } catch (err) {
      setError("Erreur lors de la recherche. Veuillez réessayer.");
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl mb-4 font-semibold">Trouve une ville pour afficher la carte</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Tape une ville (ex: Lyon)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 flex-1 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Chercher
        </button>
      </div>

      {error && (
        <p className="text-red-600 font-medium mb-4">{error}</p>
      )}

      {position && <MapComponent position={position} city={city} />}
    </main>
  );
}
