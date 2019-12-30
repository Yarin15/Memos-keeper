import React, { useState, useContext, useEffect } from 'react';
import MemoContext from '../../context/memo/memoContext';

const MemoForm = () => {
  const memoContext = useContext(MemoContext);

  const { addMemo, clearCurrent, updateMemo, current } = memoContext;

  useEffect(() => {
    if (current !== null) {
      setMemo(current);
    } else {
      setMemo({
        name: '',
        title: '',
        item: '',
        rank: 'Can Wait'
      });
    }
  }, [memoContext, current]);

  const [memo, setMemo] = useState({
    name: '',
    title: '',
    item: '',
    rank: 'Can Wait'
  });
  const { name, title, item, rank } = memo;

  const onChange = e => setMemo({ ...memo, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addMemo(memo);
    } else {
      updateMemo(memo);
    }
    setMemo({
      name: '',
      title: '',
      item: '',
      rank: 'Can Wait'
    });
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{!current ? 'Add Memo' : 'Edit Memo'}</h2>
      <select name='name'>
        <option value='electronic'>Electronic</option>
        <option value='grocery'>Grocery</option>
        <option value='home'>Home</option>
      </select>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Item'
        name='item'
        value={item}
        onChange={onChange}
      />
      <h5>Rate Priority</h5>
      <input
        type='radio'
        name='rank'
        value='Can Wait'
        checked={rank === 'Can Wait'}
        onChange={onChange}
      />{' '}
      Can Wait{' '}
      <input
        type='radio'
        name='rank'
        value='Hurry'
        checked={rank === 'Hurry'}
        onChange={onChange}
      />{' '}
      Hurry{' '}
      <div>
        <input
          type='submit'
          value={!current ? 'Add Memo' : 'Update Memo'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default MemoForm;
