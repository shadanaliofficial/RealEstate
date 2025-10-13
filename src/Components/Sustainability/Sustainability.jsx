import { useNavigate } from "react-router-dom";
import "./Sustainability.css";

export default function Sustainability() {
  const navigate = useNavigate();

  const cards = [
    { id: 1, title: "Sustainable Management" },
    { id: 2, title: "Waste Recycling" },
    { id: 3, title: "Energy Efficiency" },
    { id: 4, title: "Rainwater Harvesting" },
    { id: 5, title: "Green Building Materials" },
    { id: 6, title: "Air Quality Monitoring" },
    { id: 7, title: "Solar Integration" },
    { id: 8, title: "Water Conservation" },
  ];

  const handleCardClick = (id) => {
    navigate(`/sustainability/${id}`);
  };

  return (
    <section className="sustainability-section" id="sustainability">
      <div className="sustainability-container">
        <h1 className="sustainability-heading">
          IBGC Pre-Certified Gold Rating
        </h1>

        <div className="sustainability-grid">
          {cards.map((card) => (
            <div
              className="sustainability-card"
              key={card.id}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <p>{card.title}</p>
                </div>

                {/* Back Side */}
                <div className="card-back">
                  <p>Know More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
