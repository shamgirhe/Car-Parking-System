import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const SecurityTable = () => {
  const [securityList, setSecurityList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedSecurity, setEditedSecurity] = useState(null);

  useEffect(() => {
    const fetchSecurityList = async () => {
      const response = await axios.get('http://localhost:8080/admin/security');
      setSecurityList(response.data);
    };
    fetchSecurityList();
  }, []);

  const handleDelete = async (securityId) => {
    await axios.delete(`http://localhost:8080/admin/security/${securityId}`);
    setSecurityList(securityList.filter(security => security.userId !== securityId));
  };

  const handleEdit = (security) => {
    setEditedSecurity(security);
    setShowModal(true);
  };

  const handleSave = async () => {
    await axios.put(`http://localhost:8080/admin/security/${editedSecurity.userId}`, editedSecurity);
    setSecurityList(securityList.map(security => security.userId === editedSecurity.userId ? editedSecurity : security));
    setShowModal(false);
  };

  const handleCancel = () => {
    setEditedSecurity(null);
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedSecurity({...editedSecurity, [name]: value });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Aadhar No.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {securityList.map(security => (
            <tr key={security.userId}>
              <td>{security.userId}</td>
              <td>{security.firstName}</td>
              <td>{security.lastName}</td>
              <td>{security.email}</td>
              <td>{security.mobileNo}</td>
              <td>{security.aadharNo}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(security)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(security.userId)}>Delete</Button>
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
              <Form.Control type="text" placeholder="Enter mobile number" name="mobileNo" value={editedSecurity?.mobileNo || ''} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" name="email" value={editedSecurity?.email || ''} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SecurityTable;