import { useState, useEffect } from "react";
import "./Gallery.css";

export default function Gallery() {
  const images = [
    "/g1.webp",
    "/g2.webp",
    "/g3.webp",
    "/g4.webp",
    "/g5.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const openFullscreen = (img) => setFullscreen(img);
  const closeFullscreen = () => setFullscreen(null);

  return (
    <section className="gallery-section" id="gallery">
      <h1 className="gallery-heading">Project Gallery</h1>

      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-track">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <div className="slide" key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  onClick={() => openFullscreen(img)}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="gallery-btn-container">
        <button className="explore-btn">Explore More</button>
      </div>

      {fullscreen && (
  <div className="fullscreen-overlay">
    <button className="close-btn" onClick={closeFullscreen}>
      ✖
    </button>
    <img src={fullscreen} alt="Fullscreen" className="fullscreen-img" />
  </div>
)}
    </section>
  );
}
