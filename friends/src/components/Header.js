import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>
        FRIENDS
      </div>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/protected">View Friends</Link>
      </div>
    </header>
  )
}