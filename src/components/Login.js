// src/components/Login.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../redux/authActions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState('vilas@gmail.com');
  const [password, setPassword] = useState('vilas123');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3300/api/users/login', {
        email,
        password,
      });

      // Assuming the API returns a token field in the response
      const token = response.data.token;
      console.log(token)
      // Dispatch action to store the token
      dispatch(setAuthToken(token));

      // Redirect to the home page or another authenticated route
      history('/view-profile');
    } catch (error) {
        console.log(error)
      setError('Invalid credentials. Please try again.'); // Handle specific error messages from the server
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Button variant="primary" type="button" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
