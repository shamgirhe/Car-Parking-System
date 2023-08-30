import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form} from 'react-bootstrap';
import Axios from 'axios';
import img1 from '../../images/cb3.jpg';
import { Link} from "react-router-dom";
import './ParkingAreaDetails.css'

import { useNavigate } from 'react-router-dom';


const ParkingZoneDetails = () => {
  const [zones, setZones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedZone, setEditedZone] = useState(null);

  const token  = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addzone');
  };

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:8080/parkingzone/zone/${id}`, 
      {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      });
      setZones(zones.filter((zone) => zone.zoneId !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    const getZone = async() => {
        try{
            const response = await Axios.get("http://localhost:8080/parkingzone/zone", 
            {
              headers : {
                'Authorization' : `Bearer ${token}`
              }
            });
            setZones(response.data);

        }catch(error){
            console.log(error);
        }
    };
    getZone();
}, []);

const handleEdit = (zone) => {
  setEditedZone(zone);
  setShowModal(true);
};

const handleSave = async () => {
  const headers = {'Authorization' : `Bearer ${token}`}
  await Axios.put(`http://localhost:8080/parkingzone/zone/${editedZone.zoneId}`, editedZone, {headers:headers});
  setZones(zones.map(zone => zone.zoneId === editedZone.zoneId ? editedZone : zone));
  setShowModal(false);
};

const handleCancel = () => {
  setEditedZone(null);
  setShowModal(false);
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setEditedZone({...editedZone, [name]: value });
};
  

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
    <div className='style'>
      <h2>Parking Zone Details</h2>

    <div style={{textAlign:'left'}}>
      <button className='btn btn-info' onClick={handleClick}>
        Add
      </button>
    </div>
      
      <Table className='table-bordered'>
        <thead>
          <tr>
            <th>Zone Id</th>
            <th>Zone Area</th>
            <th>Total Slots</th>
            <th>Available Slots</th>
            <th>Edit</th>
            <th>Delete</th>
          
          </tr>
          
        </thead>
        <tbody>
          {zones.map((zone) => (
            <tr key={zone.zoneId}>
              <td>{zone.zoneId}</td>
              <td>{zone.zoneArea}</td>
              <td>{zone.totalSlots}</td>
              <td>{zone.availSlots}</td>

              <td>

              <Button variant="warning" onClick={() => handleEdit(zone)}>Edit</Button>{' '}
                
              </td>
              <td>
              <Button
                  variant="danger"
                   onClick={() => handleDelete(zone.zoneId)}
                >
                Delete
                </Button>
              </td>
           
            </tr>
          ))}
        </tbody>
      </Table>


      <Modal show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Zone Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>Zone Name</Form.Label>
              <Form.Control type="text" placeholder="Enter zone name" name="zoneArea" value={editedZone?.zoneArea || ''} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Total Slots</Form.Label>
              <Form.Control type="text" placeholder="Enter total slots" name="totalSlots" value={editedZone?.totalSlots || ''} onChange={handleInputChange} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>

      <div>
       <Link to={"/adminDashboard"}><Button
                  variant="primary"
                  className="me-2">Previous</Button></Link> 
      </div>
      

       </div>
       </div>

  );

 }

 export default ParkingZoneDetails;
