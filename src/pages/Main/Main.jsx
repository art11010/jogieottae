import React from 'react';

import { Button, Input, Title, ShadowBox } from '../../components/Atom';
import { Category, Place, Room } from '../../components/List';

// assets
import kv from '../../assets/main_kv.jpeg';

function Main() {
  return (
    <div className="container">
      <div className="relative">
        <img src={kv} alt="" className="w-9/12 rounded-3xl" />
        <ShadowBox addclass="w-2/5 absolute bottom-1/2 right-0 translate-y-1/2">
          <Title addclass="text-main">어디로 갈까요?</Title>
          <Input id="locat" label="위치" />
          <div className="grid grid-cols-2 gap-5">
            <Input id="in" label="체크인 날짜" type="date" />
            <Input id="out" label="체크아웃 날짜" type="date" />
          </div>
          <Input id="num" label="인원" />
          <Button addclass="mt-3 btn-block">검색</Button>
        </ShadowBox>
      </div>
      <Title addclass="mt-20">카테고리</Title>
      <Category />
      <Title addclass="mt-20">국내 인기 여행지</Title>
      <Place />
      <Title addclass="mt-20">속세를 벗어난 숙소</Title>
      <Room />
    </div>
  );
}

export default Main;
