import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Axios from 'axios';
import img1 from '../../images/cb2f.jpg';
import { Link} from "react-router-dom";
import './SecurityDetails.css';

const CarDetails = () => {
  const [cars, setCar] = useState([]);

  const token = localStorage.getItem("token");

  
  useEffect(()=>{
    const getCars = async() => {
        try{
            const response = await Axios.get("http://localhost:8080/base/cardetails", 
            {
              headers : {
                'Authorization' : `Bearer ${token}`
              }
            });
            setCar(response.data);

        }catch(error){
            console.log(error);
        }
    };
    getCars();
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
      <h2>Car Details</h2>
      
      <Table className='table-bordered'>
        <thead>
          <tr>
            <th>Car Id</th>
            <th>Car Type</th>
            <th>Car No</th>
            

          </tr>
          
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.carId}>
              <td>{car.carId}</td>
              <td>{car.carType}</td>
              <td>{car.carNo}</td>
              
              
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

 export default CarDetails;
