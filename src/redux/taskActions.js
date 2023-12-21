import axios from 'axios';
import {
  FETCH_TASKS_SUCCESS,
  CHANGE_TASK_STATUS_SUCCESS,
  DELETE_TASK_SUCCESS,
} from './actionTypes';

const apiUrl = 'http://localhost:3300/api/tasks'; // Replace with your actual API endpoint

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const changeTaskStatus = (taskId, newStatus) => async (dispatch) => {
  try {
    const response = await axios.put(`${apiUrl}/${taskId}`, { status: newStatus });
    dispatch({ type: CHANGE_TASK_STATUS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error changing task status:', error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/${taskId}`);
    dispatch({ type: DELETE_TASK_SUCCESS, payload: { id: taskId } });
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};