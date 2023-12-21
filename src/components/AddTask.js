import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddTask = () => {
  return (
    <div className="container">
      <h2>Add Task</h2>
      <Form>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Task Title</Form.Label>
          <Form.Control type="text" placeholder="Enter task title" />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Task Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter task description" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;