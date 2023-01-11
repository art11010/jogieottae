import React from 'react';
import { Link } from 'react-router-dom';

function UserLayout(props){
  const { onMenu } = props;

  // 현재 페이지 표시하는 함수
  function currentPage(onMenu, current){
    const highLight = 'bg-main text-white',
          listStyle = 'p-5 text-lg font-bold rounded-lg';
    return `${listStyle} ${onMenu == current ? highLight : 'hover:text-main'}`;
  }

  return (
      <article className="flex justify-between min-h-fix container m-auto">
        <aside className="flex flex-col w-1/5 bg-secondary rounded-xl p-4">
          <Link to="/mypage/booking" className={currentPage(onMenu, 'booking')}>결제 내역</Link>
          <Link to="/mypage/mypage" className={currentPage(onMenu, 'mypage')}>개인정보 변경</Link>
          <Link to="/mypage/review/view" className={currentPage(onMenu, 'review')}>내가 쓴 리뷰</Link>
        </aside>
        <section className="w-3/4 pt-50 pb-50">{props.children}</section>
      </article>
  );
}

export default UserLayout;