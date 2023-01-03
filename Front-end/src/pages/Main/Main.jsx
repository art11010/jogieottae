import React from 'react';

import ListCtgy from '../../components/ListCtgy';
import ListPlace from '../../components/ListPlace';
import ListRoom from '../../components/ListRoom';
import { Button, Input } from '../../components/Atom';

// assets
import kv from '../../assets/main_kv.jpeg';

// style
import * as M from './Main.style';

function Main() {
  return (
    <div className="container">
      <div className="relative">
        <img src={kv} alt="" className="w-9/12 rounded-3xl" />
        <M.whereBox>
          <h2 className="text-3xl font-bold text-main-middle">
            어디로 갈까요?
          </h2>
          <Input id="locat" label="위치" />
          <Input id="check" label="체크인 날짜 체크아웃 날짜" />
          <Input id="num" label="인원" />
          <Button text="검색" />
        </M.whereBox>
      </div>
      <ListCtgy></ListCtgy>
      <ListPlace></ListPlace>
      <ListRoom></ListRoom>
    </div>
  );
}

export default Main;
