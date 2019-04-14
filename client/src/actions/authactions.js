
import axios from 'axios';

import setAuthorizationToken from '../utils.js/setAuthorizationToken';

import jwtDecode from 'jwt-decode';

import { LOGOUT, LOGIN } from './types';



export function setCurrentUser(user) {

  return {

    type: LOGIN,

    user

  };

}



export function logout() {

  return dispatch => {

    localStorage.removeItem('jwtToken');

    setAuthorizationToken(false);

    dispatch(setCurrentUser({}));

  }

}



export function login(data) {

  return dispatch => {
    console.log(data)
    return axios.post('http://localhost:3000/api/users/login', data).then(res => {

      const token = res.data.data;
      localStorage.setItem('jwtToken', token);
      console.log(token)

      setAuthorizationToken(token);

      dispatch(setCurrentUser(jwtDecode(token)));

    });
    

  }

}