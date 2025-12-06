import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="logo">
        <img src="/logo.png" alt="RealEstate Logo" />
      </div>

      <div className="nav-right">
        <button className="visit-btn">SCHEDULE A VISIT</button>
        <button className="menu-toggle">☰</button>
      </div>
    </nav>
  );
}
