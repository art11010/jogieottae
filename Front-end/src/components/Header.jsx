import React from 'react';
import { Link } from 'react-router-dom';
import * as H from '../styled/Header.style';

// assets
import Logo from '../assets/logo_pink.png';

function Header() {
  return (
    <div className="bg-sky-200">
      <div className="container flex items-center py-5">
        <Link to="/" className="mr-auto">
          {/* <H.Logo></H.Logo> */}
          <img src={Logo} alt="Logo" className="w-20" />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/cart" className="pl-5">
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
