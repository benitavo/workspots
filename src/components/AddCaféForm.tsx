import { useState } from "react";

const AddCaféForm = ({ onSubmit }: { onSubmit: (newCafe: any) => void }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [wifi, setWifi] = useState(false);
  const [outlets, setOutlets] = useState(false);
  const [reviews, setReviews] = useState<string[]>([]);
  const [hours, setHours] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Date.now().toString(), // Un ID unique pour chaque café
      name,
      address,
      latitude,
      longitude,
      wifi,
      outlets,
      reviews,
      hours,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom du café</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Adresse</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

      <label>Latitude</label>
      <input type="number" value={latitude} onChange={(e) => setLatitude(+e.target.value)} />

      <label>Longitude</label>
      <input type="number" value={longitude} onChange={(e) => setLongitude(+e.target.value)} />

      <label>Wi-Fi disponible</label>
      <input type="checkbox" checked={wifi} onChange={() => setWifi(!wifi)} />

      <label>Prises électriques disponibles</label>
      <input type="checkbox" checked={outlets} onChange={() => setOutlets(!outlets)} />

      <label>Horaires d'ouverture</label>
      <input type="text" value={hours} onChange={(e) => setHours(e.target.value)} />

      <button type="submit">Ajouter le café</button>
    </form>
  );
};

export default AddCaféForm;
