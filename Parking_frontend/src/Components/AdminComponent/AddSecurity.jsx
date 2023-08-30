import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterSecurity.css';
import { Link} from 'react-router-dom';
import img1 from '../../images/cb2f.jpg';
// import { Button } from 'react-bootstrap';
import {  useNavigate } from "react-router-dom";

const AddSecurity = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [aadharNo, setAadharNo] = useState('');

    const navigate= useNavigate();
    
    const handleSubmit = async (e) => {
        const token= localStorage.getItem("token");
        e.preventDefault();
        const data = {
          firstName,
          lastName,
          email,
          password,
          mobileNo,
          aadharNo,
        };
    
        try{
        const headers={'Authorization':`Bearer ${token}`}
        const response = await axios.put('http://localhost:8080/admin/security',

        data, {headers:headers});

        console.log(response.data);
          navigate('/security');
        } catch (error)
        {
          console.error(error);
        }

        
      };

    return (
        <>
        <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        opacity:'0.8',
      }}
    >
        <div className="container mt-5">
            <h1 className="text-center mb-4">Register Security</h1>


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
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">

                            <td className="input-cell">
                                Password
                            </td>
                            <td className="input-cell">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">
                            <td className="input-cell">
                                Confirm Password
                            </td>
                            <td className="input-cell">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </td>
                        </tr>
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
                                    onChange={(e) => setAadharNo(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>

                    {/* <Link to={"/security"}><Button className='btn btn-info' type="submit" onClick={handleSubmit}>submit</Button></Link>  */}
                            <td colSpan={2} className="input-cell">
                                <Link to='/security'>
                                <button className='btn btn-info' type="submit" onClick={handleSubmit}>submit</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
        </div>
        </>
    );
};

export default AddSecurity;
