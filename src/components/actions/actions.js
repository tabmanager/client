import axios from 'axios';

import axiosWithAuth from '../../axiosWithAuth';
import { bindActionCreators } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';

// ---

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:5000/api/login', creds).then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    });
  };

// ---    

export const FETCH_LISTS_START = 'FETCH_LISTS_START';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const FETCH_LISTS_FAILURE = 'FETCH_DATA_FAILURE';


export const fetchLists = (user_id) => dispatch => {
  dispatch({ type: FETCH_LISTS_START });
  axios
    .get(`https://tab-manager.herokuapp.com/api/tabs/${user_id}`, {
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

// --- 

export const ADD_LIST = 'ADD_LIST';
export const ADD_LIST_FAILURE = 'ADD_LIST_FAILURE';

export const addList = newList => dispatch => {  
    axiosWithAuth()
      .post(`https://tab-manager.herokuapp.com/api/tabs`, newList)
      .then(res => {
        console.log(res.data);
        dispatch({ type: ADD_LIST, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_LIST_FAILURE, payload: err.response });
      });
}

// ---

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';


export const deleteList = id => dispatch => {
  dispatch({ type: DELETE_START });
  axiosWithAuth()
    .delete(`https://tab-manager.herokuapp.com/api/tabs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};


// if (err.response.status === 403) {
//     dispatch({ type: FETCH_LISTS_FAILURE, payload: err.response });
// } else {
//   dispatch({ type: DELETE_FAILURE, payload: err.response });
// }