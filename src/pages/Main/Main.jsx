import React from 'react';

import { Title } from '../../components/Atom';

import SelectProduct from '../../components/Main/SelectProduct';
import ListCategory from '../../components/List/ListCategory';
import ListPlace from '../../components/List/ListPlace';
import ListProduct from '../../components/List/ListProduct';

// assets
import kv from '../../assets/main_kv.jpeg';

function Main() {
  return (
    <div className="container">
      <div className="relative">
        <img src={kv} alt="" className="w-3/4 rounded-3xl" />
        <SelectProduct addClass="w-1/3 absolute bottom-1/2 right-0 translate-y-1/2" />
      </div>
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
