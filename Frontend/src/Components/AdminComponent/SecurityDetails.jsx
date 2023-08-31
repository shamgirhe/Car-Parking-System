
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import img1 from '../../images/cb2f.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import './SecurityDetails.css';


const SecurityDetails = () => {
  const [security, setSecurity] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedSecurity, setEditedSecurity] = useState(null);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addsecurity');
  };




  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:8080/admin/security/${id}`,
        {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      setSecurity(security.filter((security) => security.userId !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (security) => {
    setEditedSecurity(security);
    setShowModal(true);
  };

  const handleSave = async () => {
    const headers = { 'Authorization': `Bearer ${token}` }
    await Axios.put(`http://localhost:8080/admin/security/${editedSecurity.userId}`, editedSecurity, { headers: headers });
    setSecurity(security.map(security => security.userId === editedSecurity.userId ? editedSecurity : security));
    setShowModal(false);
  };

  const handleCancel = () => {
    setEditedSecurity(null);
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedSecurity({ ...editedSecurity, [name]: value });
  };


  useEffect(() => {
    const getSecurity = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/admin/security",
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        setSecurity(response.data);

      } catch (error) {
        console.log(error);
      }
    };
    getSecurity();
  }, []);

  return (


    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        opacity: '1',
      }}
    >
      <div className="style">
        <h2>Security Details</h2>
        <div>
          <button className='btn btn-info' onClick={handleClick}>
            Add
          </button>
        </div>

        <Table className='table-bordered'>
          <thead>
            <tr>
              <th>Security ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>

            </tr>

          </thead>
          <tbody>
            {security.map((security) => (
              <tr key={security.userId}>
                <td>{security.userId}</td>
                <td>{security.firstName}</td>
                <td>{security.lastName}</td>
                <td>{security.email}</td>
                <td>

                  <Button variant="warning" onClick={() => handleEdit(security)}>Edit</Button>{' '}

                  {/* onClick={() => handleShow(user)} */}

                  {/* <Link to={"/editsecurity"}><Button
                  variant="primary"
                  className="me-2">Edit</Button></Link> */}


                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(security.userId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Security Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" name="firstName" value={editedSecurity?.firstName || ''} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" name="lastName" value={editedSecurity?.lastName || ''} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicMobile">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile number" readOnly name="mobileNo" value={editedSecurity?.mobileNo || ''} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name="email" readOnly value={editedSecurity?.email || ''} onChange={handleInputChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </Modal.Footer>
        </Modal>

        <div>
          <Link to={"/adminDashboard"}><Button
            variant="primary"
            className="me-2">Previous</Button></Link>
        </div>

      </div>
    </div>

  );

}

export default SecurityDetails;



