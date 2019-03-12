
import axios from 'axios';

// import axiosWithAuth from '../../axiosWithAuth'

// ---

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('https://tab-manager.herokuapp.com/api/login', creds)
  .then(res => {
    console.log(res)
    localStorage.setItem('token', res.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  });
};

// ---    

export const FETCH_LISTS_START = 'FETCH_LISTS_START';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const FETCH_LISTS_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchLists = () => dispatch => {
  dispatch({ type: FETCH_LISTS_START });
  axios
    .get('http://localhost:5000/api/friends', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_LISTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log('call failed: ', err.response);
        dispatch({ type: FETCH_LISTS_FAILURE, payload: err.response });
    });
};


// if (err.response.status === 403) {
//     dispatch({ type: FETCH_LISTS_FAILURE, payload: err.response });
// } else {
//   dispatch({ type: DELETE_FAILURE, payload: err.response });
// }