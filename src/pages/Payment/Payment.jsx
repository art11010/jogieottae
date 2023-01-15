import React from 'react';

import {
  Alink,
  Title,
  TitleSub,
  Radio,
  ShadowBox,
} from '../../components/Atom';

import PayPerson from '../../components/Payment/PayPerson';
import PayBook from '../../components/Payment/PayBook';
import PayPrice from '../../components/Payment/PayPrice';

// assets
import roomImg from '../../assets/img_room.jpeg';

function Payment() {
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
      <Title>예약하기</Title>
      <div className="mt-10 grid grid-cols-2 gap-10 items-start">
        <ShadowBox>
          <TitleSub addClass="mb-2">예약자 정보</TitleSub>
          <PayPerson />
          <TitleSub addClass="mb-2">예약 정보</TitleSub>
          <PayBook booklist={booklist} />
        </ShadowBox>
        <ShadowBox>
          <TitleSub addClass="mb-2">금액 정보</TitleSub>
          <PayPrice booklist={booklist} />
          <div className="mt-5 px-5 border-t border-dashed border-gray-400">
            <Radio id="payType2" name="payType" checked>
              카카오페이
            </Radio>
            <Radio id="payType1" name="payType">
              적용 안함
            </Radio>
          </div>
          <Alink to="/payment/complete" addClass="mt-5 btn-block">
            결제하기
          </Alink>
        </ShadowBox>
      </div>
    </div>
  );
}

export default Payment;
