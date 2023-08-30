import React from 'react';
import {Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import backgroundImage from '../../images/pk2.jpeg';

function AboutUs ()  {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" 
    }}>
     <div className="style">
      <h1 className="text-center my-5 bg-primary text-light py-3">About Us</h1>
      <Row>
        <Col md={10}>
          <h2>Our Mission</h2>
          <p>At Online Parking System, our mission is to make parking easier, safer, and more convenient for everyone. We believe that finding a parking spot should be stress-free and simple, and we are committed to providing innovative solutions that make this a reality.</p>
          <h2>Our Website</h2>
          <p>Our website is designed to help you find parking spots quickly and easily. We offer a range of features, including:</p>
          <ul>
            <li>Real-time parking availability information</li>
            <li>Booking and reservation options</li>
            <li>Payment processing</li>
            <li>Map-based navigation to your parking spot</li>
          </ul>
          <p>With our website, you can save time and reduce the stress of finding parking in crowded areas.</p>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <h2>Parking in General</h2>
          <p>Parking can be a major hassle, especially in urban areas where space is at a premium. The average driver spends 17 hours per year searching for parking, and this can lead to increased traffic congestion, air pollution, and frustration. However, there are many ways to make parking easier and more convenient.</p>
          <p>Here are some tips:</p>
          <ul>
            <li>Use a parking website to find and reserve spots in advance</li>
            <li>Consider alternative modes of transportation, such as public transit or bike sharing</li>
            <li>Be aware of parking regulations and restrictions in your area</li>
            <li>Consider carpooling to reduce the number of vehicles on the road</li>
          </ul>
        </Col>
        </Row>
        <Row>
        <Col md={10}>
          <h2>About Us</h2>
          <p>Online Parking System is developed in 2023 with the goal of making parking easier and more convenient for everyone. We are passionate about using technology to simplify the parking process and improve the overall customer experience. Our team of experienced professionals is dedicated to developing innovative solutions that make finding and using parking spots easier than ever.</p>
        </Col>
      </Row>
   </div>
    </div>
  );
};

export default AboutUs;
