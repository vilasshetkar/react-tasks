import {
    FETCH_TASKS_SUCCESS,
    CHANGE_TASK_STATUS_SUCCESS,
    DELETE_TASK_SUCCESS,
  } from '../actionTypes';
  
  const initialState = [];
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TASKS_SUCCESS:
        return action.payload;
      case CHANGE_TASK_STATUS_SUCCESS:
        return state.map((task) =>
          task.id === action.payload.id ? { ...task, status: action.payload.status } : task
        );
      case DELETE_TASK_SUCCESS:
        return state.filter((task) => task.id !== action.payload.id);
      default:
        return state;
    }
  };
  
  export default taskReducer;