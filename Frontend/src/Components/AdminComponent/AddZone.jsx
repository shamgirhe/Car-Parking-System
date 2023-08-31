import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterSecurity.css';
import { Link } from 'react-router-dom';

const AddZone = () => {
    const [areaId, setAreaId] = useState('');
    const [zoneArea, setZoneArea] = useState('');
    const [totalSlots, setTotalSlots] = useState('');
    const token  = localStorage.getItem("token");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            areaId,
            zoneArea,
            totalSlots,
             
        };
    
        try{
      const headers = {'Authorization' : `Bearer ${token}`}
        const response = await axios.post('http://localhost:8080/parkingzone/zone', data, {headers:headers})
        console.log(response.data);
        } catch (error)
        {
          console.error(error);
        }
        
      };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Parking Zone</h1>


            <form>
                <table className="input-table">
                    <tbody>

                    <tr className="input-row">
                            <td className="input-cell">
                                Area Id
                            </td>
                            <td className="input-cell">
                                <input
                                    type="number"
                                    placeholder="Enter Area Id"
                                    value={areaId}
                                    onChange={(e) => setAreaId(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">
                            <td className="input-cell">
                                Zone Area
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter Area name"
                                    value={zoneArea}
                                    onChange={(e) => setZoneArea(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="input-row">

                            <td className="input-cell">
                                Total Slots
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

                            
                            <td colSpan={2} className="input-cell">
                                <button className='btn btn-info' type="submit" onClick={handleSubmit}><Link to={"/zone"}>Submit</Link></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    );
};

export default AddZone;
