import { useState } from "react";
import "./FloorPlans.css";

const towers = [
  {
    name: "Prabha",
    sqft: "1,250 sq.ft",
    image: "/floor1.jpg",
  },
  {
    name: "Abhaya",
    sqft: "1,450 sq.ft",
    image: "/floor2.webp",
  },
  {
    name: "Shantih",
    sqft: "1,700 sq.ft",
    image: "/floor3.webp",
  },
  {
    name: "Sampada",
    sqft: "1,900 sq.ft",
    image: "/floor4.webp",
  },
];

export default function FloorPlans() {
  const [selected, setSelected] = useState(towers[0]);

  return (
    <section className="floorplans-section">
      <div className="floorplans-left">
        <h2 className="section-title">Floor Plans</h2>

        <div className="tower-list">
          {towers.map((tower) => (
            <div
              key={tower.name}
              className={`tower-item ${
                selected.name === tower.name ? "active" : ""
              }`}
              onClick={() => setSelected(tower)}
            >
              <h3 className="tower-name">{tower.name}</h3>

              {selected.name === tower.name && (
                <p className="tower-sqft">{tower.sqft}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="floorplans-right">
        <div className="image-wrapper">
          <img
            key={selected.image}
            src={selected.image}
            alt={selected.name}
            className="floor-image"
          />
        </div>
      </div>
    </section>
  );
}
