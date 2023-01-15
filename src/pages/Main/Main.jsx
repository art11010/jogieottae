import React from 'react';

import { Title } from '../../components/Atom';

import MainVisual from '../../components/Main/MainVisual';
import ListCategory from '../../components/List/ListCategory';
import ListPlace from '../../components/List/ListPlace';
import ListProduct from '../../components/List/ListProduct';

function Main() {
  return (
    <div className="container">
      <MainVisual />
      <Title addClass="mt-20">카테고리</Title>
      <ListCategory />
      <Title addClass="mt-20">국내 인기 여행지</Title>
      <ListPlace />
      <Title addClass="mt-20">속세를 벗어난 숙소</Title>
      <ListProduct />
    </div>
  );
}

export default Main;
