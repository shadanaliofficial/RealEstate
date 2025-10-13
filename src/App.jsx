import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Features from "./Components/Features/Features.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Characteristics from "./Components/Characteristics/Characteristics.jsx";
import Location from "./Components/Location/Location.jsx";
import { SiUsps } from "react-icons/si";
import Sustainability from "./Components/Sustainability/Sustainability.jsx";
import MasterPlan from "./Components/MasterPlan/MasterPlan.jsx";
import FloorPlans from "./Components/FloorPlans/FloorPlans.jsx";
import ScheduleVisit from "./Components/ScheduleVisit/ScheduleVisit.jsx";
import Footer from "./Components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Characteristics />
      <Location />
      <Sustainability />
      <MasterPlan />
      <FloorPlans />
      <ScheduleVisit />
      <Footer />
    </div>
  );
}
