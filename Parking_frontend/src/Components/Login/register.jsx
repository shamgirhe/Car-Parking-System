import React, { useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [aadharNo, setAadharNo] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
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
        const response = await axios.post('http://localhost:8080/user/register', data)
        console.log(response.data);
        navigate('/login');
        } catch (error)
        {
          console.error(error);
        }
        
      };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Register</h1>


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

                            <td colSpan={2} className="input-cell">
                        <button type="submit" onClick={handleSubmit}>Submit</button> 
                        {/* <Link to={"/login"}></Link> */}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    );
};

export default RegisterForm;
