import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// assets
import Logo from '../../assets/logo.png';

function Header() {
  const cartNum = useSelector((state: { cart: { num: number } }) => {
    return state.cart.num;
  });

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
          className="dropdown-content menu flex-row p-2 shadow bg-base-100 rounded-box w-500 grid grid-cols-3"
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
            <Link to="/mypage/myinfo">마이페이지(개인정보)</Link>
            <Link to="/mypage/booking">예약 내역</Link>
            <Link to="/mypage/booking/details">예약 상세</Link>
            <Link to="/mypage/booking/cancel">예약 취소</Link>
            <Link to="/mypage/booking/review">리뷰 작성하기</Link>
            <Link to="/mypage/myreview">내 리뷰 리스트</Link>
          </li>
          <li>
            <h2 className="font-bold text-lg text-main pointer-events-none">
              완료
            </h2>
            <Link to="/payment/complete" className="pl-5 hover:text-main">
              예약 완료
            </Link>
            <Link to="/join/complete" className="pl-5 hover:text-main">
              가입 완료
            </Link>
            <Link to="/delete/complete" className="pl-5 hover:text-main">
              탈퇴 완료
            </Link>
          </li>
          <li>
            <h2 className="font-bold text-lg text-main pointer-events-none">
              리스트
            </h2>
            <Link to="/product" className="pl-5 hover:text-main">
              상품 리스트
            </Link>
            <Link to="/product/view" className="pl-5 hover:text-main">
              상품 상세
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
          </li>
          <li>
            <h2 className="font-bold text-lg text-main pointer-events-none">
              공지사항
            </h2>
            <Link to="/notice" className="pl-5 hover:text-main">
              공지사항
            </Link>
          </li>
          <li>
            <h2 className="font-bold text-lg text-main pointer-events-none">
              판매자
            </h2>
            <Link to="/admin/seller">판매자 로그인</Link>
            <Link to="/admin/seller/leisure?sellerId=1&page=1">
              레저시설 목록
            </Link>
            <Link to="/admin/seller/leisure/detail?sellerId=1&leisureId=2">
              레저시설 상세
            </Link>
            <Link to="/admin/seller/leisure/add?sellerId=1">레저시설 등록</Link>
          </li>
        </ul>
      </div>
      {/* 페이지 리스트 */}
      <Link to="/notice" className="pl-5 hover:text-main">
        공지사항
      </Link>
      <Link to="/mypage/booking" className="pl-5 hover:text-main">
        예약 내역
      </Link>
      <div className="indicator">
        <span className="indicator-item badge badge-primary items-baseline -top-1 -right-1">
          {cartNum}
        </span>
        <Link to="/cart" className="pl-5 hover:text-main">
          장바구니
        </Link>
      </div>
      <Link to="/mypage/myinfo" className="pl-5 hover:text-main">
        마이페이지
      </Link>
      <Link to="/login" className="pl-5 hover:text-main">
        로그인
      </Link>
    </header>
  );
}

export default Header;
