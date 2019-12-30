import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MemoItem from './MemoItem';
import MemosContext from '../../context/memo/memoContext';
import Spinner from '../layout/Spinner';

const Memos = () => {
  const memoContext = useContext(MemosContext);

  const { memos, filtered, getMemos, loading } = memoContext;

  useEffect(() => {
    getMemos();
    // eslint-disable-next-line
  }, []);

  if (memos !== null && memos.length === 0 && !loading) {
    return <h4>Start Adding Memos</h4>;
  }

  return (
    <Fragment>
      {memos !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(memo => (
                <CSSTransition key={memo._id} timeout={500} classNames='item'>
                  <MemoItem memo={memo} />
                </CSSTransition>
              ))
            : memos.map(memo => (
                <CSSTransition key={memo._id} timeout={500} classNames='item'>
                  <MemoItem memo={memo} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Memos;
