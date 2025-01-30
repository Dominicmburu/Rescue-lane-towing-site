import React from 'react';
import '../assets/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-list">
              <li><i className="fas fa-envelope"></i> <a href="mailto:rescuelane@gmail.com">rescuelane@gmail.com</a></li>
              <li><i className="fas fa-phone"></i> <a href="tel:0759595577">0759 595 577</a></li>
              <li><i className="fas fa-map-marker-alt"></i> Ngong Road, Posta, Nairobi</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="/"><i className="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="/services"><i className="fas fa-chevron-right"></i> Services</a></li>
              <li><a href="/about"><i className="fas fa-chevron-right"></i> About Us</a></li>
              <li><a href="/contact"><i className="fas fa-chevron-right"></i> Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rescue Lane Towing. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;