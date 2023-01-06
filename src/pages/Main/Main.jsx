import React from 'react';

import List from '../../components/List';
import { Button, Input, Title, ShadowBox } from '../../components/Atom';

// assets
import kv from '../../assets/main_kv.jpeg';

// style
import * as M from './Main.style';

function Main() {
  return (
    <div className="container">
      <div className="relative">
        <img src={kv} alt="" className="w-9/12 rounded-3xl" />
        <ShadowBox addclass="w-2/5 absolute bottom-1/2 right-0 translate-y-1/2">
          <Title addclass="text-main" text="어디로 갈까요?" />
          <Input id="locat" label="위치" />
          <div className="grid grid-cols-2 gap-5">
            <Input id="in" label="체크인 날짜" type="date" />
            <Input id="out" label="체크아웃 날짜" type="date" />
          </div>
          <Input id="num" label="인원" />
          <Button addclass="mt-3 btn-block" text="검색" />
        </ShadowBox>
      </div>
      <List text="카테고리" type="category" />
      <List text="국내 인기 여행지" type="place" />
      <List text="속세를 벗어난 숙소" type="room" />
    </div>
  );
}

export default Main;
