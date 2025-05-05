// src/components/CaféCard.tsx
type CaféCardProps = {
  name: string;
  address: string;
  wifi: boolean;
  power: boolean;
  rating: number;
};

export default function CaféCard({ name, address, wifi, power, rating }: CaféCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{address}</p>
      <div className="mt-2 text-sm text-gray-700">
        <p>WiFi : {wifi ? "✅ Oui" : "❌ Non"}</p>
        <p>Prises : {power ? "✅ Oui" : "❌ Non"}</p>
        <p>Note : ⭐ {rating}/5</p>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-xl">
        Voir plus
      </button>
    </div>
  );
}
