import React from 'react';

import { Input } from '../../components/Atom';

// assets
import kv from '../../assets/main_kv.jpeg';

// style
import * as M from './Main.style';

function Main() {
  return (
    <div className="container">
      <div className="flex items-center">
        <img src={kv} alt="" className="w-9/12 rounded-3xl" />
        <div className="-ml-60 p-10 bg-white rounded-3xl">
          <h2 className="text-3xl font-bold">어디로 갈까요?</h2>
          <Input id="locat" label="위치" />
          <Input id="check" label="체크인 날짜 체크아웃 날짜" />
          <Input id="num" label="인원" />
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
