import React from 'react';
import { Button, Input, Title, ShadowBox } from '../Atom';

function SelectProduct(props) {
  const { addClass } = props;
  return (
    <ShadowBox addClass={addClass}>
      <Title addClass="text-main">어디로 갈까요?</Title>
      <Input id="locat" label="위치" />
      <div className="grid grid-cols-2 gap-5">
        <Input id="in" label="체크인 날짜" type="date" />
        <Input id="out" label="체크아웃 날짜" type="date" />
      </div>
      <Input id="num" label="인원" />
      <Button addClass="mt-3 btn-block">검색</Button>
    </ShadowBox>
  );
}

export default SelectProduct;
