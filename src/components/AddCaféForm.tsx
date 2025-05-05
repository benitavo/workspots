import { useState } from "react";

type AddCaféFormProps = {
  onAddCafé: (newCafé: { name: string; address: string; wifi: boolean; power: boolean; rating: number }) => void;
};

export default function AddCaféForm({ onAddCafé }: AddCaféFormProps) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [wifi, setWifi] = useState(false);
  const [power, setPower] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCafé({ name, address, wifi, power, rating });
    setName("");
    setAddress("");
    setWifi(false);
    setPower(false);
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-6">
      <h2 className="text-xl font-semibold mb-4">Ajouter un café</h2>

      <label className="block text-sm font-medium text-gray-700 mb-2">Nom du café</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        placeholder="Nom du café"
        required
      />

      <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        placeholder="Adresse"
        required
      />

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={wifi}
          onChange={() => setWifi(!wifi)}
          className="mr-2"
        />
        <span>WiFi</span>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={power}
          onChange={() => setPower(!power)}
          className="mr-2"
        />
        <span>Prises électriques</span>
      </div>

      <label className="block text-sm font-medium text-gray-700 mb-2">Note</label>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min="0"
        max="5"
        step="0.1"
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        placeholder="Note sur 5"
        required
      />

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
        Ajouter
      </button>
    </form>
  );
}
