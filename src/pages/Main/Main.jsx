import React from 'react';

import { Title } from '../../components/Atom';
import { Category, Place, Room } from '../../components/List';
import Visual from '../../components/Main/Visual';

function Main() {
  return (
    <div className="container">
      <Visual />
      <Title addClass="mt-20">카테고리</Title>
      <Category />
      <Title addClass="mt-20">국내 인기 여행지</Title>
      <Place />
      <Title addClass="mt-20">속세를 벗어난 숙소</Title>
      <Room />
    </div>
  );
}

export default Main;
