import "./Features.css";

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h1 className="features-heading">Welcome to Vastu</h1>
        <p className="features-description">
          Experience modern living with a touch of nature. Our project combines
          comfort, aesthetics, and innovation to give you the perfect home.
          Vastu embodies an exquisite blend of elegance and serenity, where every vaastu-compliant residence is graced with expansive panoramic vistas 
          — a private retreat of natural beauty set against the city's vibrant rhythm.
        </p>

        <div className="features-row">
          <div className="feature-item">
            <img src="/f2.jpeg" alt="Feature 1" />
            <p>Swimming Pool</p>
          </div>
          <div className="divider"></div>

          <div className="feature-item">
            <img src="/f2.jpeg" alt="Feature 2" />
            <p>Gym & Fitness</p>
          </div>
          <div className="divider"></div>

          <div className="feature-item">
            <img src="/f3.jpeg" alt="Feature 3" />
            <p>Children's Park</p>
          </div>
          <div className="divider"></div>

          <div className="feature-item">
            <img src="/f5.jpeg" alt="Feature 4" />
            <p>24/7 Security</p>
          </div>
          <div className="divider"></div>

          <div className="feature-item">
            <img src="/f4.jpeg" alt="Feature 5" />
            <p>Clubhouse</p>
          </div>
          <div className="divider"></div>

          <div className="feature-item">
            <img src="/f3.jpeg" alt="Feature 6" />
            <p>Green Spaces</p>
          </div>
        </div>

        <div className="features-btn-container">
          <button className="download-btn">Download E-Brochure</button>
        </div>
      </div>
    </section>
  );
}
