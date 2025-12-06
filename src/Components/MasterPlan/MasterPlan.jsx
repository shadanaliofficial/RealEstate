import { useState } from "react";
import "./MasterPlan.css";

export default function MasterPlan() {
  const [selectedPlan, setSelectedPlan] = useState("master");

  const handleChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const getImageSrc = () => {
    if (selectedPlan === "master") return "/masterplan.webp"; // Replace with your actual filename
    if (selectedPlan === "ground") return "/groundfloor.webp"; // Replace with your actual filename
    return "/masterplan.webp";
  };

  return (
    <section className="masterplan-section" id="masterplan">
      <div className="masterplan-container">

        <div className="masterplan-left">
          <img
            src={getImageSrc()}
            alt={
              selectedPlan === "master"
                ? "Vastu Master Plan"
                : "Vastu Ground Floor Plan"
            }
          />
        </div>

        <div className="masterplan-right">
          <h1 className="masterplan-heading">MASTER PLANS</h1>

          <div className="dropdown-container">
            <select
              className="masterplan-dropdown"
              value={selectedPlan}
              onChange={handleChange}
            >
              <option value="master">Vastu Master Plan</option>
              <option value="ground">Vastu Ground Floor Plan</option>
            </select>
            <span className="dropdown-icon">▼</span>
          </div>

          <p className="masterplan-description">
            Explore our detailed plans designed with precision and purpose.
            Whether it's the complete master layout or the intricate ground floor
            blueprint — every aspect has been crafted to reflect balance,
            harmony, and smart space utilization.
          </p>
        </div>
      </div>
    </section>
  );
}
