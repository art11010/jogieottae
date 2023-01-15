import React from 'react';

import { Button, Title, Input, ShadowBox } from '../../components/Atom';
import ListProduct from '../../components/List/ListProduct';
import ProductMap from '../../components/Atom/Map';

function ProductList() {
  return (
    <div className="container">
      <div className="relative">
        <ShadowBox addClass="w-4/5 m-auto">
          <Title addClass="text-main">어디로 갈까요?</Title>
          <Input id="locat" label="위치" />
          <div className="grid grid-cols-2 gap-5">
            <Input id="in" label="체크인 날짜" type="date" />
            <Input id="out" label="체크아웃 날짜" type="date" />
          </div>
          <Input id="num" label="인원" />
          <Button addClass="mt-3 btn-block">검색</Button>
        </ShadowBox>
      </div>
      <div className="grid grid-cols-2 mt-20 gap-x-5">
        <Title addClass="mb-5 col-span-2">지금 갈 수 있는 곳</Title>
        <ListProduct />
        <ProductMap list="https://29da5bf8-9078-4627-aab5-82e2ea49e288.mock.pstmn.io/accm/product" />
      </div>
    </div>
  );
}

export default ProductList;
