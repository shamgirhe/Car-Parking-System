import React, { useState, useEffect } from 'react';
import { Table, Button} from 'react-bootstrap';
import Axios from 'axios';
import img1 from '../../images/cb2f.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from "react-router-dom";
//import "./UserDetails.css";




const UserDetails = () => {
  const [users, setUsers] = useState([]);


  const handleDelete = async (id) => {
    try {
      var token = localStorage.getItem("token");
      await Axios.delete(`http://localhost:8080/admin/user/${id}`,
      {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      });
      setUsers(users.filter((user) => user.userId !== id));
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(()=>{
    var token = localStorage.getItem("token");
    const getUsers = async() => {
        try{
            const response = await Axios.get("http://localhost:8080/admin/user", 
            {
              headers : {
                'Authorization' : `Bearer ${token}`
              }
            });

            setUsers(response.data);

        }catch(error){
            console.log(error);
        }
    };
    getUsers();
}, []);
 
  return (

      
<>
<div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: "flex",
        justifyContent: "center",
       alignItems: "center",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)"
        
      }}
    >

    {/* <div>
      <img src={img1} alt='Myimage' className="img-fluid"/> */}
    

    <div className='style'>
      <h2>User Details</h2>

      <Table className="table-bordered">
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile No</th>
            <th>Email</th>                
            <th>Delete</th>
            

          </tr>
          
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.mobileNo}</td>
              <td>{user.email}</td>
              <td>
               
                <Button
                  variant="danger"
                  onClick={() => handleDelete(user.userId)}
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
       {/* </div> */}

       </>

  );

 }

 export default UserDetails;
