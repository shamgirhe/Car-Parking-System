import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterSecurity.css';
import { Link } from 'react-router-dom';

const AddSlot = () => {
   
    const [zoneId, setZoneId] = useState('');
    const [slotName, setSlotName] = useState('');
    const token = localStorage.getItem("token");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            zoneId,
            slotName
            
        };
    
        try{
            const headers = {'Authorization' : `Bearer ${token}`}
        const response = await axios.post('http://localhost:8080/parkingslot/slot', data, {headers:headers})
        console.log(response.data);
        } catch (error)
        {
          console.error(error);
        }
        
      };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Parking Slot</h1>


            <form>
                <table className="input-table">
                    <tbody>
                    <tr className="input-row">

                <td className="input-cell">
                    Zone Id
                </td>
                <td className="input-cell">
                    <input
                        type="text"
                        placeholder="Enter zoneId"
                        value={zoneId}
                        onChange={(e) => setZoneId(e.target.value)}
                    />
                </td>
                </tr>

                        
                    
                        <tr className="input-row">
                            <td className="input-cell">
                                Slot Name
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    placeholder="Enter Slot Name"
                                    value={slotName}
                                    onChange={(e) => setSlotName(e.target.value)}
                                />
                            </td>
                        </tr>
                        
                        
                        <tr className="input-row">

                            
                            <td colSpan={2} className="input-cell">
                                <button className='btn btn-info' type="submit" onClick={handleSubmit}><Link to={"/slot"}>Submit</Link></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    );
};

export default AddSlot;
