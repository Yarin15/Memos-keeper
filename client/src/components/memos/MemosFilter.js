import React, { useContext, useRef, useEffect } from 'react';
import MemoContext from '../../context/memo/memoContext';

const MemosFilter = () => {
  const memoContext = useContext(MemoContext);
  const { filterMemos, clearFilter, filtered } = memoContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterMemos(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Memos...'
        onChange={onChange}
      />
    </form>
  );
};

export default MemosFilter;
