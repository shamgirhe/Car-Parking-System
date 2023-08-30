import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './securitydashboard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from '../../images/pk2.jpeg';

const SecurityDashboard = () => {
    const [parkingdetail, setDetails] = useState([]);


    useEffect(() => {
        const getDetails = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await Axios.get('http://localhost:8080/base/parkingdetails',
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                setDetails(response.data);

            } catch (error) {
                console.log(error);
            }
        };
        getDetails();
    }, []);

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
                <h2>Parking Details</h2>

                <table className='table-bordered'>
                    <thead>
                        <tr>
                            <th>Details Id</th>
                            <th>From Date</th>
                            <th>To Date</th>
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
                </table>


            </div>
        </div>
    );

}

export default SecurityDashboard;
