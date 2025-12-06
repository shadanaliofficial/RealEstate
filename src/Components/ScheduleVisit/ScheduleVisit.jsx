import "./ScheduleVisit.css";
import { useState } from "react";

export default function ScheduleVisit() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    datetime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your visit has been scheduled!");
  };

  return (
    <section className="visit-section">
      <div className="visit-left">
        <h2 className="visit-title">Schedule a Visit</h2>
      </div>

      <div className="visit-right">
        <form className="visit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="datetime-local"
              name="datetime"
              placeholder="Select Date & Time"
              value={formData.datetime}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Book Visit
          </button>
        </form>
      </div>
    </section>
  );
}
