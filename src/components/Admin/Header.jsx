import React from 'react';
import { Link } from 'react-router-dom';

// assets
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="mb-10 container flex items-center justify-between py-5">
      <Link to="/" className="mr-auto">
        <h1>
          <img src={Logo} alt="조기어때" className="w-44" />
        </h1>
      </Link>
      <div className="text-main font-bold">셀러A</div>
    </header>
  );
}

export default Header;
