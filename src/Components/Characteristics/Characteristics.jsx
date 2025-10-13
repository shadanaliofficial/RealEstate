import { useNavigate } from "react-router-dom";
import "./Characteristics.css";

export default function Characteristics() {
  const navigate = useNavigate();

  // These are your images (place them in the public folder)
  const features = [
    { id: 1, img: "/c1.webp", title: "Modern Architecture" },
    { id: 2, img: "/c2.webp", title: "Spacious Interiors" },
    { id: 3, img: "/c3.webp", title: "Natural Lighting" },
    { id: 4, img: "/c4.webp", title: "Green Landscaping" },
    { id: 5, img: "/c5.webp", title: "Premium Amenities" },
    { id: 6, img: "/c6.webp", title: "Strategic Location" },
    { id: 7, img: "/c7.webp", title: "Smart Home Features" },
    { id: 8, img: "/c8.webp", title: "Sustainable Design" },
  ];

  const handleCardClick = (id) => {
    navigate(`/characteristic/${id}`);
  };

  return (
    <section className="characteristics-section" id="characteristics">
      <div className="characteristics-container">
        <h1 className="characteristics-heading">
          “Where design meets comfort and sustainability”
        </h1>
        <p className="characteristics-description">
          Discover the features that make our project unique — a perfect blend
          of luxury, innovation, and harmony with nature. Each detail is crafted
          to elevate your living experience.
        </p>

        <div className="characteristics-grid">
          {features.map((feature) => (
            <div
              className="character-card"
              key={feature.id}
              onClick={() => handleCardClick(feature.id)}
            >
              <img src={feature.img} alt={feature.title} />
              <div className="card-overlay">
                <p>{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
