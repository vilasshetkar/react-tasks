import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Login from './components/Login';
import Register from './components/Register';
import ViewProfile from './components/ViewProfile';
import AddTask from './components/AddTask';
import ViewTaskList from './components/ViewTaskList';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  return (
    <Router>
      <Container className='my-5 border rounded shadow'>
        <Row>
          <Col sm={3} className="bg-light py-3">
            <Nav className="flex-column">
              {isAuthenticated ? '' :
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              }
              {isAuthenticated ? '' :
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              }
              {isAuthenticated ?
                <Nav.Link as={Link} to="/view-profile">
                  My Profile
                </Nav.Link>
                : ''}
              {isAuthenticated ?
                <Nav.Link as={Link} to="/add-task">
                  Add Task
                </Nav.Link>
                : ''}
              {isAuthenticated ?
                <Nav.Link as={Link} to="/view-task-list">
                  View Task List
                </Nav.Link>
                : ''}
            </Nav>
          </Col>
          <Col sm={9} className="p-4">
            <h2 className='border-bottom mb-4 pb-3'>Task Management</h2>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/view-profile" element={isAuthenticated ? <ViewProfile /> : <Navigate to="/login" />} />
              <Route path="/add-task" element={isAuthenticated ? <AddTask /> : <Navigate to="/login" />} />
              <Route path="/view-task-list" element={isAuthenticated ? <ViewTaskList /> : <Navigate to="/login" />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;