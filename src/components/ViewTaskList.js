import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, changeTaskStatus, deleteTask } from '../redux/taskActions';
import { Table, Button } from 'react-bootstrap';

const ViewTaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleChangeStatus = (taskId, newStatus) => {
    dispatch(changeTaskStatus(taskId, newStatus));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="container">
      <h2>Task List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>
                <select
                  onChange={(e) => handleChangeStatus(task.id, e.target.value)}
                  value={task.status}
                >
                  <option value="todo">Todo</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewTaskList;