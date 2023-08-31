import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterSecurity.css';
import { Link } from 'react-router-dom';

const AddArea = () => {
    const [areaName, setAreaName] = useState('');
    const [totalSlots, setTotalSlots] = useState('');
    const [rate, setRate] = useState('');
    const token  = localStorage.getItem("token");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            areaName,
            totalSlots,
            rate    
        };
    
        try{
            const headers = {'Authorization' : `Bearer ${token}`}

        const response = await axios.post('http://localhost:8080/parkingarea/area', data, {headers:headers})
        console.log(response.data);
        } catch (error)
        {
          console.error(error);
        }
        
      };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Parking Area</h1>


            <form>
                <table className="input-table">
                    <tbody>
                        <tr className="input-row">
                            <td className="input-cell">
                                Area name
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter Area name"
                                    value={areaName}
                                    onChange={(e) => setAreaName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">

                            <td className="input-cell">
                                Slot
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter slot"
                                    value={totalSlots}
                                    onChange={(e) => setTotalSlots(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">
                            <td className="input-cell">
                                Rate
                            </td>
                            <td className="input-cell">
                                <input
                                    type="number"
                                    placeholder="Enter rate"
                                    value={rate}
                                    onChange={(e) => setRate(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">

                            
                            <td colSpan={2} className="input-cell">
                                <button className='btn btn-info' type="submit" onClick={handleSubmit}><Link to={"/area"}>Submit</Link></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    );
};

export default AddArea;
