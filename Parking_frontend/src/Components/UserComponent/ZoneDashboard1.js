import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';

const ZoneDashboard1 = () => {

  const [zones, setZones] = useState([]);
  const [zoneSlots, setZoneSlots] = useState({});
  const [selectedZoneId, setSelectedZoneId] = useState(null);
  const [selectedZoneName, setSelectedZoneName] = useState(null);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [selectedSlotName, setSelectedSlotName] = useState('No slot selected');

  useEffect(() => {
    const area = localStorage.getItem('areaId');
    const token  = localStorage.getItem("token");
    axios.get(`http://localhost:8080/user/getarea/${area}`, 
    {
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(response => {
        const uniqueZones = response.data.reduce((accumulator, currentZone) => {
          if (!accumulator.some(zone => zone.zoneId === currentZone.zoneId)) {
            accumulator.push(currentZone);
          }
          return accumulator;
        }, []);
        setZones(uniqueZones);
        const slots = {};
        uniqueZones.forEach(zone => {
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
      toast.error("Please select zone and slot first", {
        autoClose: 2500, // Set the time (in milliseconds) for the message to be displayed
        position: toast.POSITION.TOP_CENTER // Set the position of the message
      })
    }
    else {
      localStorage.setItem("slotId", selectedSlotId);
      localStorage.setItem("slotName", selectedSlotId);
      localStorage.setItem("zoneId", selectedZoneId);
      localStorage.setItem("zoneName", selectedZoneName);
      window.location.href = "/CarDashboard";
    }
  }

  const slotStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '40px',
    margin: '2px',
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

  return (
    <div style={{ justifyContent: 'center', alignItems:'center', alignContent:'center'}}>
       <ToastContainer position={toast.POSITION.TOP_CENTER} />
      {zones.map(zone => {
        const zoneId = zone.zoneId;
        const zoneArea = zone.zoneArea;
        const totalSlots = zone.totalSlots;
        const availSlots = zone.availSlots;
        const slots = zoneSlots[zoneId];
  
        // Check if this zone has already been displayed
        const isZoneDisplayed = zones.slice(0, zones.indexOf(zone)).findIndex(z => z.zoneId === zoneId) !== -1;
  
        return !isZoneDisplayed && (
          <div key={zoneId}>
            <button onClick={() => handleZoneClick(zoneId, zoneArea)}>{zoneArea}</button>
            {selectedZoneId === zoneId && (
              <div>
                <p>Total Slots: {totalSlots}</p>
                <p>Available Slots: {availSlots}</p>
                <div>
                  {slots.map(slot => (
                    <div
                      key={slot.slotId}
                      style={slot.occupied ? occupiedSlotStyle : availableSlotStyle}
                      onClick={() => handleSlotClick(slot.slotId, slot.slotName)}
                    >
                      {slot.slotName}
                    </div>
                  ))}
                </div>
                <p>Selected Slot: {selectedSlotName}</p>
              </div>
            )}
          </div>
        )
      })}
      <div>
        <button className="btn btn-primary" onClick={BookButton}>Book</button>
      </div>
    </div>
  );
    }
    
    export default ZoneDashboard1;