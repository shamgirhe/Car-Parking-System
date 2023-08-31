import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import "./Navbar.css";

export default function NavBar() {

  const[ isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(){
    setIsLoggedIn(true);
  }

  function handleLogout(){

    setIsLoggedIn(false);
    localStorage.removeItem("token");
    
  }
  return (

    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand logo"  href="#">Car Parking System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link active" aria-current="page">About</Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
        </li>
      </ul>

      {isLoggedIn ? (
       <Link to="/home"><Button className="gradient-button" onClick={handleLogout}>Logout</Button></Link> 
      ) : (

         <Link to="/login"><button className="gradient-button" onClick={handleLogin}>Login</button></Link> 
        
        
      )}

      {/* <form>
        <button className="btn btn-outline-primary" type="submit">LogOut</button>
      </form> */}
    </div>
  </div>
</nav>







    
  );
}
