import React, { useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import Axios from 'axios';
import img1 from '../../images/cb6.jpg';
import { Link} from "react-router-dom";
import './SecurityDetails.css';

const FeedbackDetails=()=>{
    const [feedback, setFeedback] = useState([]);
const token  = localStorage.getItem("token");

    useEffect(()=>{
      const getFeedback = async() => {
          try{
              const response = await Axios.get("http://localhost:8080/admin/feedback", 
              {
                headers : {
                  'Authorization' : `Bearer ${token}`
                }
              });
              setFeedback(response.data);
  
          }catch(error){
              console.log(error);
          }
      };
      getFeedback();
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
          <h2>Feedback Details</h2>
          
          <Table className='table-bordered'>
            <thead>
              <tr>
                <th>Feedback ID</th>
                <th>Feedback</th>
              </tr>
            </thead>         
            <tbody>
              {feedback.map((feedback) => (
                <tr key={feedback.feedId}>
                  <td>{feedback.feedId}</td>
                  <td>{feedback.userFeedback}</td>                 
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

export default FeedbackDetails;