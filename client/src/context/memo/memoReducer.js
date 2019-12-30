import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_MEMOS,
  CLEAR_MEMOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MEMOS:
      return {
        ...state,
        memos: action.payload,
        loading: false
      };
    case ADD_CONTACT:
      return {
        ...state,
        memos: [...state.memos, action.payload],
        loading: false
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        memos: state.memos.map(memo =>
          memo._id === action.payload._id ? action.payload : memo
        ),
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        memos: state.memos.filter(memo => memo._id !== action.payload),
        loading: false
      };
    case CLEAR_MEMOS:
      return {
        ...state,
        memos: null,
        filtered: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.memos.filter(memo => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return memo.name.match(regex) || memo.title.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
