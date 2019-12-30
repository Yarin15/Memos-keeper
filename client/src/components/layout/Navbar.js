import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import MemoContext from '../../context/memo/memoContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const memoContext = useContext(MemoContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearMemos } = memoContext;

  const onLogout = () => {
    logout();
    clearMemos();
  };

  const authLinks = (
    <Fragment>
      <li> Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'>
            <span className='hide-sm'>LogOut</span>
          </i>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Memos Keeper',
  icon: 'fas fa-sticky-note'
};
export default Navbar;
