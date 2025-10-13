import "./Location.css";

export default function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-container">
        {/* Left Side Content */}
        <div className="location-left">
          <span className="location-subtitle">Location</span>
          <h1 className="location-heading">
            “A home perfectly placed amidst convenience and calm.”
          </h1>
          <p className="location-description">
            Situated in a prime location, our project offers unmatched
            connectivity to schools, hospitals, business hubs, and shopping
            centers — while maintaining a serene, nature-inspired environment.
            Enjoy the perfect balance of accessibility and tranquility, right
            where you belong.
          </p>
        </div>

        {/* Right Side Map */}
        <div className="location-right">
          <iframe
            title="Project Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609728863!2d72.74109917499999!3d19.082197839334404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d3c8690a9%3A0x6f7f8a4b2363d58e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
