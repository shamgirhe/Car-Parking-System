import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../images/cb2f.jpg';
import {  useNavigate } from "react-router-dom";

const AddCar = () => {

    const [carType, setCarType] = useState('');
    const [carNo, setCarNo] = useState('');
    

    const navigate= useNavigate();
    
    const handleSubmit = async (e) => {

        console.log(carNo);
        console.log(carType);

        const token= localStorage.getItem("token");
        const userId=localStorage.getItem("userId");
        e.preventDefault();
        const data = {
            carType,
            carNo
          
        };
    
        try{
        const headers={'Authorization':`Bearer ${token}`}
        const response = await axios.post(`http://localhost:8080/user/addcar/${userId}`,

        data, {headers:headers});

        console.log(response.data);
          navigate('/getcar');
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
        <div className="container mt-5" style={{backgroundColor:'lightslategrey'}}>
            <h1 className="text-center mb-4"> Add Your Car</h1>


            <form>
                <table className="input-table">
                    <tbody>
                        <tr className="input-row">
                            <td className="input-cell">
                                Car Type
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter Car Type"
                                    value={carType}
                                    onChange={(e) => setCarType(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">

                            <td className="input-cell">
                                Car No
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter Car No"
                                    value={carNo}
                                    onChange={(e) => setCarNo(e.target.value)}
                                />
                            </td>
                        </tr>
                        
                        
                       
                        <tr>

                    {/* <Link to={"/security"}><Button className='btn btn-info' type="submit" onClick={handleSubmit}>submit</Button></Link>  */}
                            <td colSpan={2} className="input-cell">
                                
                                <button className='btn btn-info' type="submit" onClick={handleSubmit}>submit</button>
                               
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

export default AddCar;
