import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="contact-sec">
          <p>Phone: 000-000-0000</p>
          <p>Fax: 000-000-0000</p>
          <p>Email: demo@example.com</p>
        </div>
        <div className="hours-sec">
          <p>Hours:</p>
          <p>8:00AM - 6:00PM</p>
        </div>
      </div>
      <div className="address-section">
        <div className="address-block">
          <p className="location-title">Demo City</p>
          <p>123 Demo Ave</p>
          <p>Demo City, DC 12345</p>
        </div>
        <div className="address-block">
          <p className="location-title">Sample Town</p>
          <p>456 Sample Rd</p>
          <p>Sample Town, ST 67890</p>
        </div>
        <div className="address-block">
          <p className="location-title">Example Borough</p>
          <p>789 Example Blvd</p>
          <p>Example Borough, EX 10112</p>
        </div>
      </div>
      <div className="map-section">
        <div className="map-block">
          <h4>Demo City</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!demo1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Demo City Location"
          ></iframe>
        </div>
        <div className="map-block">
          <h4>Sample Town</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!demo2"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Sample Town Location"
          ></iframe>
        </div>
        <div className="map-block">
          <h4>Example Borough</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!demo3"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Example Borough Location"
          ></iframe>
        </div>
      </div>
      <p className="legal-words">
        &copy; {currentDate} DemoCorp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
