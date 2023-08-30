import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carDashboard.css";
import backgroundImage from '../../images/pk2.jpeg'; 
import { useNavigate} from "react-router-dom";

function CarDashboard1() {
  const [cars, setCars] = useState([]);
  const [selectedCarNo, setSelectedCarNo] = useState("");
  const [selectedCarType, setSelectedCarType] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1); // state variable for selected row index
const navigate = useNavigate();

  var GetCarDetails = () => {
    const token = localStorage.getItem("token");
    var userId = localStorage.getItem("userId");

    axios.get(`http://localhost:8080/base/cardetails/${userId}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setCars(response.data);
    });
  };

  var Clear = () => {
    //console.log("in clear");
    //setCars([]);
    setSelectedCarNo([]);
    setSelectedCarType([]);

  };

  var onSubmit = (carNo, carType, rowIndex) => {
    //debugger;
    if(carNo === "" || carType === "")
    {
      alert("select the car details first");
    }
    else
    {
      
      localStorage.setItem("carNo", carNo);
      localStorage.setItem("carType", carType);
      setSelectedRowIndex(rowIndex); // set selected row index
      navigate("/bookingdetails");
    }
  };

  var handleCarNoChange = (event) => {
   // console.log(event.target.value)
    setSelectedCarNo(event.target.value);
  };

  var handleCarTypeChange = (event) => {
   // console.log(event.target.value)
    setSelectedCarType(event.target.value);
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
      <div className="style">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Car No</th>
              <th>Car Type</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr
                key={car.carNo}
                className={selectedRowIndex === index ? "selected-row" : ""} // apply CSS class to selected row
              >
                <td>{car.carNo}</td>
                <td>{car.carType}</td>
                <td>
                  <Button
                    className="btn btn-primary"
                    onClick={() => onSubmit(car.carNo, car.carType, index)}
                  >
                    Select
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  value={selectedCarNo}
                  placeholder="Enter Car No"
                  onChange={handleCarNoChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={selectedCarType}
                  placeholder="Enter Car Type"
                  onChange={handleCarTypeChange}
                />
              </td>
              <td>
                <Button
                  className="btn btn-primary"
                  onClick={() => onSubmit(selectedCarNo, selectedCarType, -1)}
                >
                  Select
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <br></br>
       <Button className="btn btn-dark"  onClick={() => onSubmit(selectedCarNo, selectedCarType, -1)}>
          Next
        </Button>
        {" "}
        <Button className="btn btn-warning" onClick={Clear}>
          Clear
        </Button>
        <br></br><br></br>
        <Button className="btn btn-secondary" onClick={GetCarDetails}>
          Already have registered car
        </Button>
      </div>
    </div>
  );
}

export default CarDashboard1;
