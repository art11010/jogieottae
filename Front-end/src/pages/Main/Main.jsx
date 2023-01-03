import React from 'react';

// assets
import kv from '../../assets/main_kv.jpeg';

function Main() {
  return (
    <div className="container">
      <div className="flex items-center">
        <img src={kv} alt="" className="w-9/12 rounded-3xl" />
        <div className="-ml-60 p-10 bg-white rounded-3xl">
          <h2>어디로 갈까요?</h2>
          <form action="">
            <label>
              <input type="text" placeholder="위치" />
            </label>
            <label>
              <input type="text" placeholder="체크인 날짜 체크아웃 날짜" />
            </label>
            <label>
              <input type="text" placeholder="인원" />
            </label>
          </form>
        </div>
      </div>
      <div>
        카테고리
        <ul>
          <li>
            {/* <img src="../assets/main_kv.jpeg" alt="" /> */}
            모텔
          </li>
          <li>
            {/* <img src="" alt="" /> */}
            호텔
          </li>
          <li>
            {/* <img src="" alt="" /> */}
            놀거리
          </li>
          <li>
            {/* <img src="" alt="" /> */}
            펜션/풀빌라
          </li>
        </ul>
      </div>
      <div>
        <h2>국내 인기 여행지</h2>
        <ul>
          <li>제주도</li>
          <li>부산</li>
          <li>경주</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
