import {
    FETCH_LISTS_START,
    FETCH_LISTS_SUCCESS,
    FETCH_LISTS_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS
   } from '../actions/actions'

//   ---

const initialState = {
    lists: [],
    loggingIn: false,
    error: '',
    errorStatusCode: null,
    fetchingLists: false,
    token: localStorage.getItem('token')
}; 

// --- 

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
      case FETCH_LISTS_START:
      return {
        ...state,
        fetchingLists: true,
        error: null
      }
      case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        lists: [...state.friends, ...action.payload],
        fetchingLists: false,
        error: null
      }
      case FETCH_LISTS_FAILURE:
      return {
        ...state, 
        fetchingLists: false,
        error: action.payload
      }
      default:
        return state;
    }
  };
  
  export default reducer