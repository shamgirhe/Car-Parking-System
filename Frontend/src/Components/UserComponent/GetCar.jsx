import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Axios from 'axios';
import img1 from '../../images/cb2f.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./CarDetails.css";




const GetCar = () => {
    const [cars, setCars] = useState([]);

    
    useEffect(() => {
        const getCars = async () => {
            try {
                const token = localStorage.getItem("token");

    const userId = localStorage.getItem('userId');
                const response = await Axios.get(`http://localhost:8080/base/cardetails/${userId}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                setCars(response.data);

            } catch (error) {
                console.log(error);
            }
        };
        getCars();
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


                <div className="style">
                    <h2>Car Details</h2>

                    <Table className="table-bordered">
                        <thead>
                            <tr>

                                <th>Car Type</th>
                                <th>Car No</th>



                            </tr>

                        </thead>
                        <tbody>
                            {cars.map((car) => (
                                <tr key={car.carId}>
                                    <td>{car.carType}</td>
                                    <td>{car.carNo}</td>

                                </tr>


                            ))}
                            <tr>
                                <td colSpan={"2"}>
                                    <Link to={"/addcar"}><Button
                                        variant="primary"
                                        className="btn btn-dark me-2">Add</Button></Link>


                                </td>
                            </tr>
                        </tbody>
                    </Table>


                    <div>
                        <Link to={"/userDashboard"}><Button
                            variant="primary"
                            className="me-2">Previous</Button></Link>
                    </div>



                </div>
            </div>
            {/* </div> */}

        </>

    );

}

export default GetCar;
