import React from 'react';
import { Alink, Title, TitleSub, ShadowBox } from '../../components/Atom';

import PayProduct from '../../components/Payment/PayProduct';
import PayPrice from '../../components/Payment/PayPrice';

// assets
import roomImg from '../../assets/img_room.jpeg';

function Cart() {
  const booklist = [
    {
      imgSrc: roomImg,
      roomName: '마포 신라스테이',
      date: '2월 25일 ~ 2월 26일',
      day: 1,
      num: 2,
      price: 80000,
    },
    {
      imgSrc: roomImg,
      roomName: '그랜드 하얏트 제주',
      date: '3월 1일 ~ 3월 3일',
      day: 2,
      num: 4,
      price: 300000,
    },
    {
      imgSrc: roomImg,
      roomName: '강릉 세인트존스호텔',
      date: '5월 5일 ~ 5월 8일',
      day: 2,
      num: 5,
      price: 110000,
    },
  ];
  return (
    <div className="container">
      <Title>장바구니</Title>
      <div className="mt-10 grid grid-cols-2 gap-10 items-start">
        <ShadowBox>
          <TitleSub addClass="mb-2">예약 정보</TitleSub>
          <PayProduct booklist={booklist} cart={true} />
        </ShadowBox>
        <ShadowBox>
          <TitleSub addClass="mb-2">금액 정보</TitleSub>
          <PayPrice booklist={booklist} cart={true} />
          <Alink to="/payment" addClass="mt-5 btn-block">
            예약하기
          </Alink>
        </ShadowBox>
      </div>
    </div>
  );
}

export default Cart;
