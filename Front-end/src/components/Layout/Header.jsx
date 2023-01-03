import React from 'react';
import { Link } from 'react-router-dom';

// assets
import Logo from '../../assets/logo_pink.png';

function Header() {
  return (
    <header className="bg-main mb-10">
      <div className="container flex items-center py-5">
        <Link to="/" className="mr-auto">
          <h1>
            <img src={Logo} alt="조기어때" className="w-24" />
          </h1>
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/cart" className="pl-5">
          Cart
        </Link>
      </div>
    </header>
  );
}

export default Header;
