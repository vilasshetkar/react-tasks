import { SET_AUTH_TOKEN, LOGOUT } from './actionTypes';

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});