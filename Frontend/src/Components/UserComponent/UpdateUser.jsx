import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './update.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const UpdateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [aadharNo, setAadharNo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem("userId");
        const data = {
            firstName,
            lastName,
            email,
            mobileNo,
            aadharNo,
        };

        const token = localStorage.getItem("token");
        try {
            const headers = { 'Authorization': `Bearer ${token}` }
            const response = await axios.put(`http://localhost:8080/user/update/${userId}`, data, { headers: headers });

            console.log(response);
            navigate("/userDashboard");
        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        axios.get(`http://localhost:8080/user/userdetails/${userId}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setPassword(response.data.password);
                setMobileNo(response.data.mobileNo);
                setAadharNo(response.data.aadharNo);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Your Details</h1>


            <form>
                <table className="input-table">
                    <tbody>
                        <tr className="input-row">
                            <td className="input-cell">
                                First Name
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">

                            <td className="input-cell">
                                Last Name
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">
                            <td className="input-cell">
                                Email address
                            </td>
                            <td className="input-cell">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    readOnly
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </td>
                        </tr>
                        {/* <tr className="input-row">

                            <td className="input-cell">
                                Password
                            </td>
                            <td className="input-cell">
                                <input
                                    type="input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </td>
                        </tr> */}
                        <tr className="input-row">

                            <td className="input-cell">
                                Mobile Number
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    value={mobileNo}
                                    onChange={(e) => setMobileNo(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">

                            <td className="input-cell">
                                Aadhar Number
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter Aadhar Number"
                                    value={aadharNo}
                                    readOnly
                                    onChange={(e) => setAadharNo(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="input-cell">
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                            </td>
                        </tr>
                        <div>
                                <Link to={"/userDashboard"}><Button
                                    variant="primary"
                                    className="me-2">Previous</Button></Link>
                            </div>
                    </tbody>
                </table>

            </form>
        </div>
    );
};

export default UpdateUser;
