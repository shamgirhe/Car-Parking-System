import React, { useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import Axios from 'axios';
import img1 from '../../images/cb8.avif';
import { Link} from "react-router-dom";
import './CarDetails.css';



const ParkingDetailsUser = () => {
  const [parkingdetail, setDetails] = useState([]);
const token  = localStorage.getItem("token");
  
  useEffect(()=>{
    const getDetails = async() => {
        try{
            const response = await Axios.get("http://localhost:8080/base/parkingdetails", 
            {
              headers : {
                'Authorization' : `Bearer ${token}`
              }
            });
            setDetails(response.data);

        }catch(error){
            console.log(error);
        }
    };
    getDetails();
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
      <h2>Parking Details</h2>
      
      <Table className="table-bordered">
        <thead>
          <tr>
            <th>Details Id</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Payement Mode</th>
            <th>Total Amount</th>
            <th>Car Id</th> 
            <th>Area Id</th>
            <th>Slot Id</th>
          </tr>
          
        </thead>
        <tbody>
          {parkingdetail.map((parking) => (
            <tr key={parking.detailsId}>
              <td>{parking.detailsId}</td>
              <td>{parking.fromDate}</td>
              <td>{parking.toDate}</td>
              <td>{parking.totalAmt}</td>
              <td>{parking.carId}</td>
              <td>{parking.areaId}</td>
              <td>{parking.slotId}</td>
           
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
       <Link to={"/userDashboard"}><Button
                  variant="primary"
                  className="me-2">Previous</Button></Link> 
      </div>

      </div>
      

       </div>

  );

 }

 export default ParkingDetailsUser;
