import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function UserLayout() {
  const pathName = useLocation().pathname;

  // 현재 페이지 표시하는 함수
  function currentPage(current) {
    const highLight = 'bg-main text-white',
      listStyle = 'p-5 text-lg font-bold rounded-lg';
    return `${listStyle} ${
      pathName.includes(current) ? highLight : 'hover:text-main'
    }`;
  }

  return (
    <article className="flex justify-between min-h-fix container m-auto">
      <aside className="flex flex-col w-1/5 bg-secondary rounded-xl p-4">
        <Link to="/mypage/myinfo" className={currentPage('myinfo')}>
          개인정보
        </Link>
        <Link to="/mypage/booking" className={currentPage('booking')}>
          예약 내역
        </Link>
        <Link to="/mypage/myreview" className={currentPage('myreview')}>
          내가 쓴 리뷰
        </Link>
      </aside>
      <section className="w-3/4 pt-50 pb-50">
        <Outlet />
      </section>
    </article>
  );
}

export default UserLayout;
