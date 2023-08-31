import React, { useState } from "react";
import axios from 'axios'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import backgroundImage from "../../images/cb3.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/auth/signin', {
        email,
        password
      });

      const token  = response.data.jwt;
      const role = response.data.role;
      const userId = response.data.userId;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);
      
      if(role === "ROLE_ADMIN")
      {
        navigate("/adminDashboard");
      }
      else if(role === "ROLE_SECURITY")
      {
        navigate("/securityDashboard");
      }
      else
      {
        navigate("/userDashboard");
      }

      console.log(response.data);
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <i
                  className={`bi bi-eye${showPassword ? "-slash" : ""} password-icon`}
                  onClick={handleShowPassword}
                ></i>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3" onClick={handleSubmit}>
                Login
              </Button>
            </Form>
            <div className="text-center mt-3">
              <span>Don't have an account?</span>
              <a href="/signin" className="ml-2">
                Register here
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
