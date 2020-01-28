import React from 'react';
import { Link } from 'react-router-dom';
import friendslogo from '../images/friendslogo.png'

export const Header = () => {
  return (
    <header>
      <div>
        <Link to="/login"><img src={friendslogo} className="logo" /></Link>
        
      </div>
      <div className="links">
        {!localStorage.getItem('token')
          ? <Link to="/login">Login</Link>
          : <Link to="/login" onClick={() => {
            localStorage.clear()
          }}>Logout</Link>}

        <Link to="/protected">View Friends</Link>
      </div>
    </header>
  )
}