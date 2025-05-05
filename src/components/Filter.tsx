import { useState } from "react";

const Filter = ({ onFilterChange }: { onFilterChange: (filter: string) => void }) => {
  const [filter, setFilter] = useState("all");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div>
      <label>Filtrer par :</label>
      <select value={filter} onChange={handleChange}>
        <option value="all">Tous les cafés</option>
        <option value="withReviews">Cafés avec avis</option>
        <option value="withoutReviews">Cafés sans avis</option>
        <option value="wifi">Cafés avec Wi-Fi</option>
        <option value="outlets">Cafés avec prises électriques</option>
      </select>
    </div>
  );
};

export default Filter;
