import { useState } from 'react';

const CityForm = ({ onSubmit }: { onSubmit: (city: string) => void }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(city); // Appelle la fonction de recherche avec la ville
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto mt-8">
      <label htmlFor="city" className="text-lg font-semibold mb-2">
        Entrez votre ville
      </label>
      <input
        id="city"
        type="text"
        placeholder="Ex: Paris"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 mb-4 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Rechercher
      </button>
    </form>
  );
};

export default CityForm;
