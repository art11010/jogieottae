import React from 'react';

import ShadowBox from '../../components/ShadowBox';
import List from '../../components/List';
import { Button, Input, Title } from '../../components/Atom';

// assets
import kv from '../../assets/main_kv.jpeg';

// style
import * as M from './Main.style';

function Main() {
  return (
    <div className="container">
      <div className="relative">
        <img src={kv} alt="" className="w-9/12 rounded-3xl" />
        <ShadowBox addclass="absolute bottom-1/2 right-0 translate-y-1/2">
          <Title addclass="text-main" text="어디로 갈까요?" />
          <Input id="locat" label="위치" />
          <Input id="check" label="체크인 날짜 체크아웃 날짜" />
          <Input id="num" label="인원" />
          <Button text="검색" />
        </ShadowBox>
      </div>
      <List title="카테고리" type="category" />
      <List title="국내 인기 여행지" type="place" />
      <List title="속세를 벗어난 숙소" type="room" />
    </div>
  );
}

export default Main;
