import React from 'react';

import { Title } from '../../components/Atom';

import roomImg from '../../assets/img_room.jpeg';

import ProductMap from '../Product/Map';

function BookingDetails() {
  return (
    <div>
      <Title>상세보기</Title>
      <img src={roomImg} alt="" className="w-60 rounded-xl" />
      <p className="text-gray-400">예약번호 : Y01010101010101</p>
      숙소명 : 마포 신라스테이
      <br />
      위치
      <br />
      <br />
      날짜 : 2월 25일 ~ 2월 26일, 2명
      <br />
      <br />
      체크인 11월 12일 (금) 오후 5:00 <br />
      체크아웃 11월 13일 (토) 오전 11:00 <br />
      2023.02.20 00:00 전까지 무료취소
      <br />
      숙소 전화번호
      <br />
      금액 및 할인 정보
      <br />
      예약 금액
      <br />
      총 할인 금액 -3000원
      <br />
      <ProductMap />
    </div>
  );
}

export default BookingDetails;
