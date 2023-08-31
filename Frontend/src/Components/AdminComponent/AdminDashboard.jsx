import { Link} from "react-router-dom";
import img1 from '../../images/cb3.jpg';

function AdminDashboard()
{
    return(

        <div
        style={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            opacity:'1',
          }}>
    <hr></hr>
      <Link style={{color: 'green', fontStyle:'revert', fontWeight:600}} to={"/user"}>User</Link>{"  |  "}
      <Link style={{color: 'green', fontStyle:'revert', fontWeight:600}} to={"/security"}>Security</Link>{"  |  "}
      <Link style={{color: 'green', fontStyle:'revert', fontWeight:600}} to={"/adminparking"}>Parking</Link>{"  |  "}
      <Link style={{color: 'green', fontStyle:'revert', fontWeight:600}} to={"/area"}>Area</Link>{"  |  "}
      <Link style={{color: 'green', fontStyle:'revert', fontWeight:600}} to={"/zone"}>Zone</Link>{"  |  "}
      <Link style={{color: 'green', fontStyle:'revert', fontWeight:600}} to={"/slot"}>Slot</Link>{"  |  "}
      <Link style={{color: 'green', fontStyle:'revert', fontWeight:600}} to={"/car"}>Car</Link>{"  |  "}
      <Link style={{color: 'green', fontStyle:'revert', fontWeight:600}} to={"/feedback"}>Feedback</Link>{"    "}
    <hr></hr>
        </div>
    );
}

export default AdminDashboard;