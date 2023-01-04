import React from 'react';
import { Link } from 'react-router-dom';

// assets
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="mb-10">
      <div className="container flex items-center py-5">
        <Link to="/" className="mr-auto">
          <h1>
            <img src={Logo} alt="조기어때" className="w-44" />
          </h1>
        </Link>
        <Link to="/payment" className="hover:text-main">
          예약하기
        </Link>
        <Link to="/cart" className="pl-5 hover:text-main">
          장바구니
        </Link>
        <Link to="/login" className="pl-5 hover:text-main">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
