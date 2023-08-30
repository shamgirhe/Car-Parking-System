import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Axios from 'axios';
import img1 from '../../images/cb3.jpg';
import { Link} from "react-router-dom";
import './ParkingSlotDetails.css';

import { useNavigate } from 'react-router-dom';


const ParkingSlotDetails = () => {
  const [slots, setSlots] = useState([]);
  
  const token  = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addslot');
  };

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:8080/parkingslot/slot/${id}`, 
      {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      });
      setSlots(slots.filter((slot) => slot.slotId !== id));
    } catch (error) {
      console.log(error);
    }
  };

  


  useEffect(()=>{
    const getSlot = async() => {
        try{
            const response = await Axios.get("http://localhost:8080/parkingslot/slot", 
            {
              headers : {
                'Authorization' : `Bearer ${token}`
              }
            });
            setSlots(response.data);
        }catch(error){
            console.log(error);
        }
    };
    getSlot();
}, []);
  

  return (

    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        opacity:'1',
      }}
    >
    <div className="style">
      <h2>Parking Slot Details</h2>

    <div style={{textAlign:'left'}}>
      <button className='btn btn-info' onClick={handleClick}>
        Add
      </button>
    </div>
      
      <Table className='table-bordered'>
        <thead>
          <tr>
            <th>Slot Id</th>
            <th>Slot Name</th>
            <th>Is Occupied</th>
            
            <th>Delete</th>
          </tr>
          
        </thead>
        <tbody>
          {slots.map((slot) => (
            <tr key={slot.slotId}>
              <td>{slot.slotId}</td>
              <td>{slot.slotName}</td>
              <td>{slot.occupied}</td>

              <td>
              <Button
                  variant="danger"
                   onClick={() => handleDelete(slot.slotId)}
                >
                  Delete
                </Button>
              </td>
      
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
       <Link to={"/adminDashboard"}><Button
                  variant="primary"
                  className="me-2">Previous</Button></Link> 
      </div>

      
      

       </div>
       </div>

  );

 }

 export default ParkingSlotDetails;
