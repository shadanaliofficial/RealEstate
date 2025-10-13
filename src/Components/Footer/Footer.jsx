import "./footer.css";
import { FaFacebookF, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LEFT SIDE */}
        <div className="footer-left">
          <h3>Project By</h3>
          <h1>SANGAM REAL ESTATE</h1>
          <p>
            Sangam Real Estate is a premier developer known for crafting
            luxurious and sustainable spaces that blend architectural elegance
            with modern living. Our focus lies in creating landmark properties
            that stand the test of time.
          </p>
        </div>

        {/* MIDDLE SIDE */}
        <div className="footer-middle">
          <h3>Project Address</h3>
          <p>Plot No. 17, Green Enclave, Baner, Pune – 411045</p>

          <h3>RERA ID</h3>
          <p>P521000XXXXX</p>

          <h3>Corporate Address</h3>
          <p>Sangam Towers, 5th Floor, Koregaon Park, Pune – 411001</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <div className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp className="arrow-icon" />
      </div>
    </footer>
  );
}
