import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  if (sessionUser) {
    return (
      <div className="links">
        <div className="messageboard">
          <NavLink to="/messageboard">Message Board</NavLink>
        </div>
        <div>
          <NavLink to="/schedule">Schedule</NavLink>
        </div>
        <div>
          <NavLink to="/event">Events</NavLink>
        </div>
        <div>
          {isLoaded && sessionLinks}
        </div>
        <h3>{sessionUser.username}</h3>
      </div>
    );
  } else {
    return (
      <>
        <div className="links">
          <div>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
          </div>
        </div>
        <h1>Please sign in!</h1>
      </>
    )
  }
}

export default Navigation;
