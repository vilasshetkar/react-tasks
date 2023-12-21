import { SET_AUTH_TOKEN, LOGOUT } from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  authToken: null,
};

const authReducer = (state = initialState, action) => {
    console.log(state, action)
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        isAuthenticated: true,
        authToken: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        authToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;