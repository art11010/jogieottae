import React from 'react';
import { Link } from 'react-router-dom';

// assets
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="mb-10 container flex items-center py-5">
      <Link to="/" className="mr-auto">
        <h1>
          <img src={Logo} alt="조기어때" className="w-44" />
        </h1>
      </Link>

      {/* 페이지 리스트 */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-secondary m-1">
          페이지 리스트
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu flex-row p-2 shadow bg-base-100 rounded-box w-500"
        >
          <li>
            <h2 className="font-bold text-lg text-main pointer-events-none">
              로그인
            </h2>
            <Link to="/login">로그인</Link>
            <Link to="/login/join">회원가입</Link>
            <Link to="/login/findid">아이디 찾기</Link>
            <Link to="/login/findpw">비밀번호 찾기</Link>
          </li>
          <li>
            <h2 className="font-bold text-lg text-main pointer-events-none">
              마이페이지
            </h2>
            <Link to="/mypage/booking">마이페이지</Link>
            <Link to="/mypage/booking/details">예약 내역</Link>
            <Link to="/mypage/booking/review">리뷰 작성하기</Link>
            <Link to="/mypage/myinfo">개인정보 변경</Link>
            <Link to="/mypage/myreview">내 리뷰 리스트</Link>
          </li>
          <li>
            <h2 className="font-bold text-lg text-main pointer-events-none">
              리스트
            </h2>
            <Link to="/product" className="pl-5 hover:text-main">
              상품 리스트
            </Link>
          </li>
          <li>
            <h2 className="font-bold text-lg text-main pointer-events-none">
              예약
            </h2>
            <Link to="/cart" className="pl-5 hover:text-main">
              장바구니
            </Link>
            <Link to="/payment" className="pl-5 hover:text-main">
              예약하기
            </Link>
            <Link to="/complete" className="pl-5 hover:text-main">
              예약완료 (가입, 탈퇴)
            </Link>
          </li>
        </ul>
      </div>
      {/* 페이지 리스트 */}

      <Link to="/cart" className="pl-5 hover:text-main">
        장바구니
      </Link>
      <Link to="/login" className="pl-5 hover:text-main">
        로그인
      </Link>
    </header>
  );
}

export default Header;
