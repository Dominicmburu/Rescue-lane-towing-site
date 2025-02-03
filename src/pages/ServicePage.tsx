import React from "react";
import Layout from "../components/Layout";
import "../assets/styles/Services.css";
import carTowingImage from "../../public/Images/Services/car-towing.jpg";
import roadsideAssistanceImage from "../../public/Images/Services/roadside-assistance.jpg";
import accidentRecoveryImage from "../../public/Images/Services/accident-recovery.jpg";
import heavyLiftingImage from "../../public/Images/Services/heavy-lifting.jpg";
import remoteImage from "../../public/Images/Services/remote.jpg";

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <div id="services-page" className="services-page">
        <div className="services-header">
          <div className="s-header">
            <h1>OUR SERVICES</h1>
            <p>
              Experience top-notch <span> roadside assistance</span> and{" "}
              <span>towing services</span>
              designed to get you back on track swiftly and safely. Whether it's
              a minor hiccup or a major breakdown, our expert team is here to
              help <span>24/7</span>. Discover our range of services tailored to
              meet all your emergency needs.
            </p>
          </div>
        </div>

        <div className="services-container">
          <div className="service-cards">
            <div className="service-card">
              <img src={carTowingImage} alt="Car Towing" />
              <h3>CAR TOWING</h3>
              <p>
                Quick and reliable car towing services whenever you need them.
              </p>
            </div>

            <div className="service-card">
              <img src={accidentRecoveryImage} alt="Accident Recovery Towing" />
              <h3>ACCIDENT RECOVERY TOWING</h3>
              <p>Professional recovery for vehicles involved in accidents.</p>
            </div>

            <div className="service-card">
              <img src={roadsideAssistanceImage} alt="Roadside Assistance" />
              <h3>ROADSIDE ASSISTANCE</h3>
              <p>
                From flat tires to jump starts, we are here to help you get back
                on the road.
              </p>
            </div>

            <div className="service-card">
              <img src={heavyLiftingImage} alt="Heavy Crane Services" />
              <h3>HEAVY CRANE SERVICES</h3>
              <p>
                Specialized services for heavy-duty lifting and towing
                requirements.
              </p>
            </div>

            <div className="service-card">
              <img src="https://thornburytowing.com.au/wp-content/uploads/2024/06/shutterstock_1986893366-1536x1024.jpg" alt="Long-Distance Towing" />
              <h3>LONG-DISTANCE TOWING</h3>
              <p>
                For personal and commercial vehicles, no matter the distance.
              </p>
            </div>

            <div className="service-card">
              <img src="https://www.timbertowing.com/wp-content/uploads/2023/11/two-trucksss.jpg" alt="Flatbed Towing" />
              <h3>FLATBED TOWING</h3>
              <p>
                Specialized handling for vehicles that require flatbed towing.
              </p>
            </div>

            <div className="service-card">
              <img
                src="https://ceeskillzauto.com/wp-content/uploads/2024/07/anchorroadsidellcfueldelivery-965x450.jpeg"
                alt="Fuel Delivery & Lockout Services"
              />
              <h3>EMERGENCY FUEL DELIVERY & LOCKOUT</h3>
              <p>On-demand fuel delivery and emergency lockout services.</p>
            </div>

            <div className="service-card">
              <img
                src="https://civilseek.com/wp-content/uploads/2022/08/Transport-construction-equipment-.jpeg"
                alt="Transportation of Equipment"
              />
              <h3>TRANSPORTATION OF EQUIPMENT</h3>
              <p>
                Transporting construction and industrial equipment with care.
              </p>
            </div>

            <div className="service-card">
              <img
                src={remoteImage}
                alt="Vehicle Recovery in Remote Areas"
              />
              <h3>REMOTE VEHICLE RECOVERY</h3>
              <p>
                Recovery of vehicles stuck in remote or challenging terrains.
              </p>
            </div>
          </div>
        </div>

        <div className="pricing-section">
          <h2>PRICING</h2>
          <div className="pricing-tables">
            <div className="pricing-table">
              <h3>Saloons and Station Wagons</h3>
              <table>
                <thead>
                  <tr>
                    <th>Distance</th>
                    <th>Charges in Ksh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0-10 KM</td>
                    <td>5000</td>
                  </tr>
                  <tr>
                    <td>10-20 KM</td>
                    <td>6000</td>
                  </tr>
                  <tr>
                    <td>20-30 KM</td>
                    <td>8000</td>
                  </tr>
                  <tr>
                    <td>30-40 KM</td>
                    <td>10000</td>
                  </tr>
                  <tr>
                    <td>40-50 KM</td>
                    <td>12000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pricing-table">
              <h3>SUVs, Pick-ups, Micro/Mini Bus and Trucks below 2 Tons</h3>
              <table>
                <thead>
                  <tr>
                    <th>Distance</th>
                    <th>Charges in Ksh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0-10 KM</td>
                    <td>5500</td>
                  </tr>
                  <tr>
                    <td>10-20 KM</td>
                    <td>6500</td>
                  </tr>
                  <tr>
                    <td>20-30 KM</td>
                    <td>9000</td>
                  </tr>
                  <tr>
                    <td>30-40 KM</td>
                    <td>11000</td>
                  </tr>
                  <tr>
                    <td>40-50 KM</td>
                    <td>13000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
