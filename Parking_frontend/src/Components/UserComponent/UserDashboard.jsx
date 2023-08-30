import React, { useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/park5.jpg';
//import myImg from '../../images/park0.jpg';
import security from '../../images/security.png';
import washing from '../../images/washing.jpg';
import servicing from '../../images/servicing.png';
import { Button} from 'react-bootstrap';

function UserDashboard() {
  var [selectedArea, setSelectedArea] = useState('Select Area');
  var [area, setArea] = useState([]);
  var [message, setMessage] = useState('Welcome to EASYPARKING');

  var handlePhaseChange = (event) => {
    const selectedValue = event.target.value;
    const selectedAreaObject = area.find(area => area.areaName === selectedValue);
    localStorage.setItem("areaId", selectedAreaObject.areaId);
    localStorage.setItem("areaName", selectedAreaObject.areaName);
    localStorage.setItem("areaRate", selectedAreaObject.rate)
    setSelectedArea(selectedArea);
    setMessage(`Parking Charges at ${selectedAreaObject.areaName} is ${selectedAreaObject.rate}`);
    setSelectedArea(selectedValue);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get('http://localhost:8080/user/showarea', 
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setArea(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

//   var ParkingDetailsButton = () => {
//     <Link to="/parking"></Link>
//   }

//   var userDetailsbutton = ()=>
//   {
// <Link to="/updateuser"></Link>
//   }

//   var BookButton = () => {
//     window.location.href = "selectTime";
//   }

  return (
    <div  style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      {/* Dropdown on upper left corner */}
      <div style={{ position: 'absolute', top: 100, left: 40 }}>
        <select
          value={selectedArea}
          onChange={handlePhaseChange}
        >
          <option value="">{selectedArea}</option>
          {area.map((option) => (
            <option key={option.areaId} value={option.areaName}>
              {option.areaName}
            </option>
          ))}
        </select>
      </div>

      {/* Button on upper right corner */}
      <div style={{ position: 'absolute', top: 100, right: 90 }}>
        <Link to={"/userparking"}><Button className='btn btn-dark "me-2"' style={{ height: 50, width: 150 } }
                  variant="primary"
                  >Parking Details</Button></Link>
        {/* <button className='btn btn-dark' style={{ height: 50, width: 150 }} onClick={ParkingDetailsButton}>Parking Details</button> */}
      </div>

      <div style={{ position: 'absolute', top: 180, right: 90 }}>
      <Link to={"/updateuser"}><Button className='btn btn-dark "me-2"' style={{ height: 50, width: 150 } }
                  variant="primary"
                  >Your Details</Button></Link>
        {/* <button className='btn btn-dark' style={{ height: 50, width: 150 }} onClick={userDetailsbutton}>Your Details</button> */}
      </div>

      <div style={{ position: 'absolute', top: 260, right: 90 }}>
      <Link to={"/getcar"}><Button className='btn btn-dark "me-2"' style={{ height: 50, width: 150 } }
                  variant="primary"
                  >Car Details</Button></Link>
        {/* <button className='btn btn-dark' style={{ height: 50, width: 150 }} onClick={userDetailsbutton}>Your Details</button> */}
      </div>

      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
        <img src={myImg} alt="My Img" style={{ height: 250, width: 500,position: 'absolute', top: 100 }} />
      </div> */}

      {/* Message DIV */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50 ,width:300,position: 'absolute', bottom: 300,backgroundColor: 'yellow' }}>
        <p className="text-center font-weight-bold">{message}</p>
      </div>

      {/* Two buttons below the image */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 90, position: 'absolute', bottom: 175, left: 0, right: 0 }}>
        <button className='btn btn-dark' style={{ height: 50, width: 120,marginRight: 95}}>Services</button>
        <Link to={"/book"}><Button className='btn btn-dark "me-2"' style={{ height: 50, width: 150 } }
                  variant="primary"
                  >Book</Button></Link>
        {/* <button className='btn btn-dark' style={{ height: 50, width: 120}} onClick={BookButton}>Book</button> */}
      </div>
      
      {/* Three Clickable Images */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 90, position: 'absolute', bottom: 60, left: 0, right: 0 }}>
        <img src={security} alt="Security" style={{ height: 50, width: 50, marginRight: 50 }} />
        <img src={washing} alt="Washing" style={{ height: 50, width: 50, marginRight: 50 }} />
        <img src={servicing} alt="Servicing" style={{ height: 50, width: 50 }} />
      </div>
    </div>

  );
}

export default UserDashboard;
