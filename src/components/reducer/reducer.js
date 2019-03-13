import {
    FETCH_LISTS_START,
    FETCH_LISTS_SUCCESS,
    FETCH_LISTS_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    ADD_LIST,
    ADD_LIST_FAILURE,
    DELETE_START,
    DELETE_SUCCESS
   } from '../actions/actions'

//   ---

const initialState = {
    lists: [],
    loggingIn: false,
    error: '',
    errorStatusCode: null,
    fetchingLists: false,
    token: localStorage.getItem('token'),
    user_id: localStorage.getItem('user_id')

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
        token: action.payload,
        user_id: localStorage.getItem("user_id")
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
        lists: [...state.lists, action.payload],
        fetchingLists: false,
        error: null
      }
      case FETCH_LISTS_FAILURE:
      return {
        ...state, 
        fetchingLists: false,
        error: action.payload
      }
      case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload]
      };
      case ADD_LIST_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      case DELETE_START:
      return {
        error: ''
      }
      case DELETE_SUCCESS:
      return {
        ...state,
        lists: action.payload
      }
      default:
        return state;
    }
  };
  
  export default reducer