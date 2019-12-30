import React, { useReducer } from 'react';
import axios from 'axios';
import MemoContext from './memoContext';
import memoReducer from './memoReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  CLEAR_MEMOS,
  GET_MEMOS
} from '../types';

const MemoState = props => {
  const initialState = {
    memos: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(memoReducer, initialState);

  // Get Memos
  const getMemos = async () => {
    try {
      const res = await axios.get('/api/memos');

      dispatch({ type: GET_MEMOS, payload: res.data });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //   Add Contact
  const addMemo = async memo => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/memos', memo, config);

      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };
  //   Delete Contact
  const deleteMemo = async id => {
    try {
      await axios.delete(`/api/memos/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };
  //   Update Contact
  const updateMemo = async memo => {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(`/api/memos/${memo._id}`, memo, config);

      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Clear Memos
  const clearMemos = () => {
    dispatch({ type: CLEAR_MEMOS });
  };
  //   Set Current Contact
  const setCurrent = memo => {
    dispatch({ type: SET_CURRENT, payload: memo });
  };
  //   Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //   Filter Contacts
  const filterMemos = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //   Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <MemoContext.Provider
      value={{
        memos: state.memos,
        current: state.current,
        filtered: state.filtered,
        addMemo,
        deleteMemo,
        setCurrent,
        clearCurrent,
        updateMemo,
        filterMemos,
        clearFilter,
        getMemos,
        clearMemos
      }}
    >
      {props.children}
    </MemoContext.Provider>
  );
};

export default MemoState;
