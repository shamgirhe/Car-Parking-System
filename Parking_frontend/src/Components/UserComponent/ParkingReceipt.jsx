import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Document, Page } from '@react-pdf/renderer';
import './parkingReceipt.css';
import backgroundImage from '../../images/pk2.jpeg'; 


const ParkingReceipt = () => {
  const [parkingData, setParkingData] = useState({});
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfData, setPdfData] = useState(null);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    // Retrieve data from local storage
    // debugger;
    const areaName = localStorage.getItem('areaName');
    const zoneName = localStorage.getItem('zoneName');
    const slotName = localStorage.getItem('slotName');
    const parkingFromDate = localStorage.getItem('parkingFromDate');
    const parkingToDate = localStorage.getItem('parkingToDate');
    const parkingFromTime = localStorage.getItem('parkingFromTime');
    const parkingToTime = localStorage.getItem('parkingToTime');
    const carNo = localStorage.getItem('carNo');
    const totalAmt = localStorage.getItem('totalAmt');

    // Set the data to state
    setParkingData({
      areaName,
      zoneName,
      slotName,
      parkingFromDate,
      parkingToDate,
      parkingFromTime,
      parkingToTime,
      carNo,
      totalAmt
    });
  }, []);

  const  handleDownload = async () => {
    const pdfDoc = (
      <table>
        <tbody>
          <tr>
            <td>Parking Area:</td>
            <td>{parkingData.areaName}</td>
          </tr>
          <tr>
            <td>Parking Zone:</td>
            <td>{parkingData.zoneName}</td>
          </tr>
          <tr>
            <td>Parking Slot:</td>
            <td>{parkingData.slotName}</td>
          </tr>
          <tr>
            <td>From Date:</td>
            <td>{parkingData.parkingFromDate}</td>
          </tr>
          <tr>
            <td>To Date:</td>
            <td>{parkingData.parkingToDate}</td>
          </tr>
          <tr>
            <td>From Time:</td>
            <td>{parkingData.parkingFromTime}</td>
          </tr>
          <tr>
            <td>To Time:</td>
            <td>{parkingData.parkingToTime}</td>
          </tr>
          <tr>
            <td>Car Number:</td>
            <td>{parkingData.carNo}</td>
          </tr>
          <tr>
            <td>total Amt:</td>
            <td>{parkingData.totalAmt}</td>
          </tr>
        </tbody>
      </table>
    );
    // const data = new Blob([pdfData], { type: 'application/pdf' });
    // const pdfBlob = window.URL.createObjectURL(data);
    // setPdfData(pdfData);
    // saveAs(data, 'receipt.pdf');

    const blob = await pdf(pdfDoc).toBlob();
    saveAs(blob, 'receipt.pdf');
  };

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
      <center>
        <h2>Parking Receipt</h2>
      </center>
      <table className='table-bordered'>
        <tbody>
          <tr>
            <td>Parking Area</td>
            <td>{parkingData.areaName}</td>
          </tr>
          <tr>
            <td>Parking Zone</td>
            <td>{parkingData.zoneName}</td>
          </tr>
          <tr>
            <td>Parking Slot</td>
            <td>{parkingData.slotName}</td>
          </tr>
          <tr>
            <td>From Date</td>
            <td>{parkingData.parkingFromDate}</td>
          </tr>
          <tr>
            <td>To Date</td>
            <td>{parkingData.parkingToDate}</td>
          </tr>
          <tr>
            <td>From Time</td>
            <td>{parkingData.parkingFromTime}</td>
          </tr>
          <tr>
            <td>To Time</td>
            <td>{parkingData.parkingToTime}</td>
          </tr>
          <tr>
            <td>Car Number</td>
            <td>{parkingData.carNo}</td>
          </tr>
          <tr>
            <td>Total Amount</td>
            <td>{parkingData.totalAmt}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <center>
        <button className='btn btn-primary' onClick={handleDownload}>Download Receipt</button>
      </center>

      {pdfData &&
        <Document file={pdfData} onLoadSuccess={handleDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      }
    </div>
    </div>
  );
}

export default ParkingReceipt;