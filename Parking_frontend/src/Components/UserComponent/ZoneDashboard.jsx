import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
//import { ToastContainer, toast } from 'react-toastify';
import { Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

const ZoneDashboard1 = () => {

  const [zones, setZones] = useState([]);
  const [zoneSlots, setZoneSlots] = useState({});
  const [selectedZoneId, setSelectedZoneId] = useState(null);
  const [selectedZoneName, setSelectedZoneName] = useState(null);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [selectedSlotName, setSelectedSlotName] = useState('No slot selected');

  useEffect(() => {
    const area = localStorage.getItem('areaId');
    const token = localStorage.getItem("token");

    axios.get(`http://localhost:8080/user/getarea/${area}`, 
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setZones(response.data);
        const slots = {};
        response.data.forEach(zone => {
          slots[zone.zoneId] = zone.slots;
        });
        setZoneSlots(slots);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleZoneClick = (zoneId, zoneName) => {
    setSelectedZoneId(zoneId);
    setSelectedZoneName(zoneName);
    setSelectedSlotId(null);
    setSelectedSlotName('No slot selected');
  }

  const handleSlotClick = (slotId, slotName) => {
    setSelectedSlotId(slotId);
    setSelectedSlotName(slotName);
  }

  const BookButton = () => {
    if (selectedSlotId === null || selectedZoneId === null) {
      // toast.error("Please select zone and slot Id", {
      //   autoClose: 5000, // Set the time (in milliseconds) for the message to be displayed
      //   position: toast.POSITION.TOP_CENTER // Set the position of the message
      // })

      alert("Please select zone and slot Id");
    }
    else {
      localStorage.setItem("slotId", selectedSlotId);
      localStorage.setItem("slotName", selectedSlotName);
      localStorage.setItem("zoneId", selectedZoneId);
      localStorage.setItem("zoneName", selectedZoneName);
      window.location.href = "/CarDashboard";
    }
  }

  const slotStyle = {
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    margin: '2px',
    marginRight: '10px',
    borderRadius: '2px',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
  };
  

  const availableSlotStyle = {
    ...slotStyle,
    backgroundColor: 'green'
  };

  const occupiedSlotStyle = {
    ...slotStyle,
    backgroundColor: 'red'
  };

  const mainDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop:50,
    alignItems: 'top',
    height: '100vh'
  };

  return (
    <div style={mainDivStyle}>
      {zones.map(zone => (
        <div key={zone.zoneId} style={{marginRight: 70,height:20,width:120}}>
          <button onClick={() => handleZoneClick(zone.zoneId, zone.zoneArea)}>{zone.zoneArea}</button>
          {selectedZoneId === zone.zoneId && (
            <div style={{marginTop:15}}>
              <p>Total Slots: {zone.totalSlots}</p>
              <p>Available Slots: {zone.availSlots}</p>
              <div>
              {zoneSlots[zone.zoneId].map((slot, index) => (
                  <div
                    key={slot.slotId}
                    style={{
                      ...slotStyle,
                      ...(slot.occupied ? occupiedSlotStyle : availableSlotStyle),
                      display: 'inline-flex',
                      marginRight:10
                  }}
                    onClick={() => handleSlotClick(slot.slotId, slot.slotName)}
                  >
                    {slot.slotName}
                  </div>
                ))}
              </div>
              {/* <p>Selected Slot: {selectedSlotId}</p> */}
              <p>Selected Slot: {selectedSlotName} </p>
            </div>
          )}
        </div>
      ))}
      <div>
      <Link to={"/cardashboard"}><Button className='btn btn-dark "me-2"' style={{ height: 50, width: 150 } }
                  variant="primary"
                  >Book</Button></Link>
        {/* <button className="btn btn-primary" onClick={BookButton}>Book</button> */}
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ZoneDashboard1;
