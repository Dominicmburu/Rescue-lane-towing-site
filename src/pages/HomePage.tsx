import React from "react";
import Layout from "../components/Layout";
import "../assets/styles/Home.css";
import roadsideAssistanceImage from "../../public/Images/Homepage/br5.jpg";
import deliveriesImage from "../../public/Images/Homepage/deliveries.jpg";
import motorcycleTowingImage from "../../public/Images/Homepage/motorcycle-towing.jpg";
import flatbedTowingImage from "../../public/Images/Homepage/flatbed-towing.jpg";
import personImage from "../../public/Images/Homepage/person-avatar.jpg";
import quoteIcon from "../../public/Images/Homepage/quote-icon.png";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="homepage">
        <header className="hero-section">
          <div className="hero-overlay">
            <h1>Rescue Lane Towing - Kenya</h1>
            <h2>
              Roadside Assistance, <span>When You Need It the Most</span>
            </h2>
            <h3>
              The Highest Quality <br />
              Towing Services
            </h3>
          </div>
        </header>

        <div className="emergency-box">
          <p>24/7 Emergency Services</p>
          <h2 className="emergency-number">0759955777</h2>
        </div>

        <section id="about" className="about-section">
          <h2 className="about-h2">About Us</h2>
          <div className="about-content">
            <p>
              With over 15 years of experience, we aim to offer fast response
              and <br />
              reliable service to our customers. Our team of dedicated
              professionals are available <br /> around the clock to cater for
              your towing needs.
            </p>
            <p className="p-s">
              Our services span across Nairobi and into other towns like <br />{" "}
              Mombasa, Kisumu, Nakuru, Thika, and beyond. <br /> Trust Rescue
              Lane to prioritize your safety and peace of mind.
            </p>
            <button>Read More</button>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>We Specialize In</h2>
          <div className="service-list">
            <div className="service-item">
              <img src={roadsideAssistanceImage} alt="Roadside Assistance" />
              <p>Roadside Assistance</p>
            </div>
            <div className="service-item">
              <img src={deliveriesImage} alt="Deliveries" />
              <p>Deliveries</p>
            </div>
            <div className="service-item">
              <img src={motorcycleTowingImage} alt="Motorcycle Towing" />
              <p>Motorcycle Towing</p>
            </div>
            <div className="service-item">
              <img src={flatbedTowingImage} alt="Flatbed Towing" />
              <p>Flatbed Towing</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>Testimonials</h2>
          <div className="testimonial-container">
          <div className="testimonial-wrapper">
            <div className="testimonial-content">
              <div className="profl">
                <img
                  src={personImage}
                  alt="Testimonial Person"
                  className="person-image"
                />
                <h3>Vivian Aoko</h3>
              </div>
              <p>
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-left"
                />
                Rescue Lane provided exceptional service when my car broke down
                in Nairobi's outskirts. Highly recommended! Their team was
                professional, courteous, and quick to help. I feel safer knowing
                they are just a phone call away
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-right"
                />
              </p>
            </div>

            <div className="testimonial-content">
              <div className="profl">
                <img
                  src={personImage}
                  alt="Testimonial Person"
                  className="person-image"
                />
                <h3>Vivian Aoko</h3>
              </div>
              <p>
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-left"
                />
                Rescue Lane provided exceptional service when my car broke down
                in Nairobi's outskirts. Highly recommended! Their team was
                professional, courteous, and quick to help. I feel safer knowing
                they are just a phone call away
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-right"
                />
              </p>
            </div>

            <div className="testimonial-content">
              <div className="profl">
                <img
                  src={personImage}
                  alt="Testimonial Person"
                  className="person-image"
                />
                <h3>Vivian Aoko</h3>
              </div>
              <p>
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-left"
                />
                Rescue Lane provided exceptional service when my car broke down
                in Nairobi's outskirts. Highly recommended! Their team was
                professional, courteous, and quick to help. I feel safer knowing
                they are just a phone call away
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-right"
                />
              </p>
            </div>

            <div className="testimonial-content">
              <div className="profl">
                <img
                  src={personImage}
                  alt="Testimonial Person"
                  className="person-image"
                />
                <h3>Vivian Aoko</h3>
              </div>
              <p>
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-left"
                />
                Rescue Lane provided exceptional service when my car broke down
                in Nairobi's outskirts. Highly recommended! Their team was
                professional, courteous, and quick to help. I feel safer knowing
                they are just a phone call away
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-right"
                />
              </p>
            </div>

            <div className="testimonial-content">
              <div className="profl">
                <img
                  src={personImage}
                  alt="Testimonial Person"
                  className="person-image"
                />
                <h3>Vivian Aoko</h3>
              </div>
              <p>
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-left"
                />
                Rescue Lane provided exceptional service when my car broke down
                in Nairobi's outskirts. Highly recommended! Their team was
                professional, courteous, and quick to help. I feel safer knowing
                they are just a phone call away
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-right"
                />
              </p>
            </div>

            <div className="testimonial-content">
              <div className="profl">
                <img
                  src={personImage}
                  alt="Testimonial Person"
                  className="person-image"
                />
                <h3>Vivian Aoko</h3>
              </div>
              <p>
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-left"
                />
                Rescue Lane provided exceptional service when my car broke down
                in Nairobi's outskirts. Highly recommended! Their team was
                professional, courteous, and quick to help. I feel safer knowing
                they are just a phone call away
                <img
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="quote-icon-right"
                />
              </p>
            </div>
            
          </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
