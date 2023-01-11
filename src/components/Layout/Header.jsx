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
        <Link to="/mypage/booking" className="pl-5 hover:text-main">
          예약 내역
        </Link>
        <Link to="/product/list" className="pl-5 hover:text-main">
          상품 리스트
        </Link>
        <Link to="/complete" className="pl-5 hover:text-main">
          완료
        </Link>
        <Link to="/payment" className="pl-5 hover:text-main">
          예약하기
        </Link>
        <Link to="/cart" className="pl-5 hover:text-main">
          장바구니
        </Link>
        <Link to="/login" className="pl-5 hover:text-main">
          로그인
        </Link>
        <Link to="/login/join" className="pl-5 hover:text-main">
          회원가입
        </Link>
        <Link to="/login/findid" className="pl-5 hover:text-main">
          아이디 찾기
        </Link>
        <Link to="/login/findpw" className="pl-5 hover:text-main">
          비밀번호 찾기
        </Link>
      </div>
    </header>
  );
}

export default Header;
