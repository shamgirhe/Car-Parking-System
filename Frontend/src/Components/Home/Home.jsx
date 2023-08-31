import React, { useState } from 'react';
import backgroundImage from '../../images/park1.jpg';
import image from '../../images/park1.jpg';
import aboutUs from '../../images/aboutus.jpg';
import contactUs from '../../images/contact.png';
import help from '../../images/help.jpeg';
import login from '../../images/login.jpg';
import signIn from '../../images/signin.png';
import whatsapp from '../../images/wp.jpg';
import instagram from '../../images/ig.jpg';
import facebook from '../../images/fb.jpg';
import twitter from '../../images/twr.jpg';


function Home() {
  const [selectedPhase, setSelectedPhase] = useState('');

  const handlePhaseChange = (event) => {
    setSelectedPhase(event.target.value);
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>

      {/* Image at the left upper corner
      <img src="https://via.placeholder.com/100x100" alt="placeholder" style={{ position: 'absolute', top: 25, left: 25, height: 75, width: 150 }} /> */}

      {/* Login In icon */}
      <div style={{ position: 'absolute', top: 30, right: 25 }}>
        <a href="/login">
          <img src={login} alt="Login In" style={{ height: 50, width: 50 }} />
          <div style={{ textAlign: 'center' }}></div>
        </a>
        <p style={{color:'darkorange'}}>Log In</p>
      </div>

      {/* Sign In icon */}
      <div style={{ position: 'absolute', top: 120, right: 30 }}>
        <a href="/signin">
          <img src={signIn} alt="Sign In" style={{ height: 50, width: 50 }} />
          <div style={{ textAlign: 'center' }}></div>
        </a>
        <p style={{color:'darkorange'}}>Sign In</p>
      </div>

      {/* Help icon */}
      {/* <div style={{ position: 'absolute', top:190, left: 30 }}>
        <a href="https://www.example.com/signin">
          <img src={help} alt="Sign In" style={{ height: 50, width: 50 }} />
          <div style={{ textAlign: 'center' }}>Help</div>
        </a>
      </div> */}

       {/* Contact us icon */}
       <div style={{ position: 'absolute', top: 110, left: 30 }}>
        <a href="/contact">
          <img src={contactUs} alt="Sign In" style={{ height: 50, width: 50 }} />
          <div style={{ textAlign: 'center' }}></div>
        </a>
        <p style={{color:'darkorange'}}>Contact Us</p>
      </div>

       {/* About us icon */}
       <div style={{ position: 'absolute', top: 25, left: 30 }}>
        <a href="/about">
          <img src={aboutUs} alt="Sign In" style={{ height: 50, width: 50 }} />
          <div style={{ textAlign: 'center' }}></div>
        </a>
        <p style={{color:'darkorange'}}>About Us</p>
      </div>

      {/* Image in the middle
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
        <img src={image} alt="placeholder" style={{ height: 320, width: 600 }} />
      </div> */}

    {/* Yellow background DIV box */}
    {/* <div style={{ backgroundColor: 'yellow', width: '400px', height: '25px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Follow us on</h2>
      </div>
    </div> */}

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 30 ,width:300,position: 'absolute',marginLeft:600, bottom: 100,backgroundColor: 'lightseagreen', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
        <p className="text-center font-weight-bold">Follow us on</p>
      </div>

      {/* Four images with links */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 90, position: 'absolute', bottom: 20, left: 0, right: 0 }}>
        <a href="https://www.instagram.com/" style={{ marginRight: 35 }}>
          <img src={instagram} alt="placeholder" style={{ height: 50, width: 50 }} />
        </a>
        <a href="https://www.whatsapp.com/" style={{ marginRight: 35 }}>
          <img src={whatsapp} alt="placeholder" style={{ height: 50, width: 50 }} />
        </a>
        <a href="https://www.facebook.com/" style={{ marginRight: 35 }}>
          <img src={facebook} alt="placeholder" style={{ height: 50, width: 50 }} />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="placeholder" style={{ height: 50, width: 50 }} />
        </a>
      </div>

    </div>
  );
}

export default Home;
