import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from '../../images/pk2.jpeg';
import './selectTime.css';
import { useNavigate } from 'react-router-dom';
import { Link} from "react-router-dom";
import { toast , ToastContainer} from 'react-toastify';

const DateTimePicker = () => {
  const [fromDate, setFromDate] = useState(new Date().toISOString().slice(0, 10));
  const [fromTime, setFromTime] = useState('');
  const [toDate, setToDate] = useState(new Date().toISOString().slice(0, 10));
  const [toTime, setToTime] = useState('');

  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toISOString().slice(11, 16);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((currentDate === fromDate) && (currentTime > fromTime)) {
      setFromTime('');
      alert('From time should not be before current time');
      toast.error("Please select zone and slot first", {
        autoClose: 2500, // Set the time (in milliseconds) for the message to be displayed
        position: toast.POSITION.TOP_CENTER // Set the position of the message
      })
    }

    if ((currentDate === fromDate) && (currentTime >= toTime)) {
      setToTime('');
      alert('To time should not be before current time');
      toast.error("Please select zone and slot first", {
        autoClose: 2500, // Set the time (in milliseconds) for the message to be displayed
        position: toast.POSITION.TOP_CENTER // Set the position of the message
      })
    }

    else if ((currentDate === fromDate) && (fromTime >= toTime)) {
      setToTime('');
      alert('To time should not be before from time');
      toast.error("Please select zone and slot first", {
        autoClose: 2500, // Set the time (in milliseconds) for the message to be displayed
        position: toast.POSITION.TOP_CENTER // Set the position of the message
      })
    }
    else if ((currentDate < fromDate) && (fromTime >= toTime)) {
      setToTime('');
      alert('To time should not be before from time');
      toast.error("Please select zone and slot first", {
        autoClose: 2500, // Set the time (in milliseconds) for the message to be displayed
        position: toast.POSITION.TOP_CENTER // Set the position of the message
      })
    }
    else {
      localStorage.setItem('parkingFromDate', fromDate);
      localStorage.setItem('parkingFromTime', fromTime);
      localStorage.setItem('parkingToDate', toDate);
      localStorage.setItem('parkingToTime', toTime);
      navigate("/tozone");
    }
  };

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
      <div className='style'>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fromDate">
          <Form.Label>From Date:</Form.Label>
          <Form.Control type="date" min={currentDate} value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="fromTime">
          <Form.Label>From Time:</Form.Label>
          <Form.Control type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="toDate">
          <Form.Label>To Date:</Form.Label>
          <Form.Control type="date" min={fromDate || currentDate} value={toDate} onChange={(e) => setToDate(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="toTime">
          <Form.Label>To Time:</Form.Label>
          <Form.Control type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} required />
        </Form.Group>
    <br></br>
    {/* <Link to={"/tozone"}> */}
        <Button variant="warning" type="submit">
          Submit
        </Button>
         <hr></hr>
        <Link to={"/userDashboard"}><Button
                  variant="primary" type='submit'
                  >Previous</Button></Link> 
      </Form>
     
      </div>
    </div>
  );
};

export default DateTimePicker;