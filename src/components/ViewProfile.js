import React from 'react';
import { Card } from 'react-bootstrap';

const ViewProfile = () => {
  return (
    <div className="container">
      <h2>View Profile</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>User Profile</Card.Title>
          <Card.Text>
            Name: John Doe
            <br />
            Email: john.doe@example.com
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewProfile;