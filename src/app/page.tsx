"use client"; // <-- Ajoute ceci en haut du fichier

import { useState } from "react";
import CaféCard from "@/components/CaféCard";
import AddCaféForm from "@/components/AddCaféForm";

const initialCafés = [
  {
    name: "Café Lumière",
    address: "123 Rue du Code, Paris",
    wifi: true,
    power: false,
    rating: 4.5,
  },
  {
    name: "Nomad's Coffee",
    address: "45 Av. du Remote, Lisbonne",
    wifi: true,
    power: true,
    rating: 4.8,
  },
  {
    name: "Bureau Café",
    address: "7 Rue des Freelancers, Marseille",
    wifi: false,
    power: true,
    rating: 3.9,
  },
];

export default function Home() {
  const [cafés, setCafés] = useState(initialCafés);

  const handleAddCafé = (newCafé: { name: string; address: string; wifi: boolean; power: boolean; rating: number }) => {
    setCafés([...cafés, newCafé]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <AddCaféForm onAddCafé={handleAddCafé} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafés.map((café, index) => (
          <CaféCard key={index} {...café} />
        ))}
      </div>
    </main>
  );
}
