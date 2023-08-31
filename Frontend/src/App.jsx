import {  Route, Routes } from 'react-router-dom';


import NavBar from './Components/NavBar';

import Home from './Components/Home/Home';
import UserDetails from './Components/AdminComponent/UserDetails';
import SecurityDetails from './Components/AdminComponent/SecurityDetails';
import ParkingAreaDetails from "./Components/AdminComponent/ParkingAreaDetails";
import ParkingZoneDetails from "./Components/AdminComponent/ParkingZoneDetails";
import ParkingSlotDetails from './Components/AdminComponent/ParkingSlotDetails';
import CarDetails from './Components/AdminComponent/CarDetails';
import FeedbackDetails from './Components/AdminComponent/FeedbackDetails';
import AddSecurity from './Components/AdminComponent/AddSecurity';
import AddArea from './Components/AdminComponent/AddArea';
import AddZone from './Components/AdminComponent/AddZone';
import AddSlot from './Components/AdminComponent/addSlot';

import Contact from './Components/ContactUs/contact';

import Footer from "./Components/Footer";
import Login from './Components/Login/login';
import AboutUs from './Components/About/about';
import UserDashboard from './Components/UserComponent/UserDashboard';
import RegisterForm from './Components/Login/register';
import AdminDashboard from './Components/AdminComponent/AdminDashboard';
import SecurityDashboard from './Components/SecurityComponent/SecurityDashboard';
import UpdateUser from './Components/UserComponent/UpdateUser';
import DateTimePicker from './Components/UserComponent/SelectTime';
import ZoneDashboard1 from './Components/UserComponent/ZoneDashboard1';
import CarDashboard1 from './Components/UserComponent/CarDashboard';
import BookingDetails from './Components/UserComponent/BookingDetails';
import ParkingReceipt from './Components/UserComponent/ParkingReceipt';
import ParkingDetailsAdmin from './Components/AdminComponent/ParkingDetailsAdmin';
import ParkingDetailsUser from './Components/UserComponent/ParkingDetailsUser';
import GetCar from './Components/UserComponent/GetCar';
import AddCar from './Components/UserComponent/AddCar';


 

function App()
{

    return (

    <>
    <NavBar></NavBar>
    
    
    
    

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signin' element={<RegisterForm/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route> 
      <Route path='/adminDashboard' element={<AdminDashboard/>}></Route> 
      <Route path='/securityDashboard' element={<SecurityDashboard/>}></Route>
      <Route path='/userDashboard' element={<UserDashboard/>}></Route>
      <Route path='/user' element={<UserDetails/>}></Route>
      <Route path='/security' element={<SecurityDetails/>}></Route>
      <Route path='/adminparking' element={<ParkingDetailsAdmin/>}></Route>
      <Route path='/userparking' element={<ParkingDetailsUser/>}></Route>
      <Route path='/area' element={<ParkingAreaDetails/>}></Route>
      <Route path='/zone' element={<ParkingZoneDetails/>}></Route>
      <Route path='/slot' element={<ParkingSlotDetails/>}></Route>
      <Route path='/car' element={<CarDetails/>}></Route>
      <Route path='/feedback' element={<FeedbackDetails/>}></Route>
      <Route path='/addsecurity' element={<AddSecurity/>}></Route>
      <Route path='/addarea' element={<AddArea/>}></Route>
      <Route path='/addzone' element={<AddZone/>}></Route>
      <Route path='/addslot' element={<AddSlot/>}></Route>
      <Route path='/updateuser' element={<UpdateUser/>}></Route>
      <Route path='/book' element={<DateTimePicker/>}></Route>
      <Route path='/tozone' element={<ZoneDashboard1/>}></Route>
      <Route path="/cardashboard" element={<CarDashboard1/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route> 
      <Route path='/bookingdetails' element={<BookingDetails/>}></Route> 
      <Route path='/parkingreceipt' element={<ParkingReceipt/>}></Route> 
      <Route path='/getcar' element={<GetCar/>}></Route> 
      <Route path='/addcar' element={<AddCar/>}></Route> 
    </Routes>

   

    <Footer></Footer>
    </>
    );

}

export default App;





















