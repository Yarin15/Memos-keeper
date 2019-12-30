import React, { useContext, useEffect } from 'react';
import Memos from '../memos/Memos';
import MemoForm from '../memos/MemoForm';
import MemoFilter from '../../components/memos/MemosFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <MemoForm />
      </div>
      <div>
        <MemoFilter />
        <Memos />
      </div>
    </div>
  );
};

export default Home;
