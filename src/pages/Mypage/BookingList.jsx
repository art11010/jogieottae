import React from 'react';
import { Link } from 'react-router-dom';
import { Title, TitleSub, BorderBox } from '../../components/Atom';
import List from '../../components/Mypage/List';
// assets
import roomImg from '../../assets/img_room.jpeg';

function BookingList() {
  const booklist = [
    {
      imgSrc: roomImg,
      roomName: '마포 신라스테이',
      paydata: '2022.12.25 (일)',
      date: '2월 25일 ~ 2월 26일',
      num: 2,
    },
    {
      imgSrc: roomImg,
      roomName: '그랜드 하얏트 제주',
      paydata: '2020.08.30 (일)',
      date: '3월 1일 ~ 3월 3일',
      num: 4,
    },
    {
      imgSrc: roomImg,
      roomName: '강릉 세인트존스호텔',
      paydata: '2023.01.01 (일)',
      date: '5월 5일 ~ 5월 8일',
      num: 5,
    },
  ];

  return (
    <>
      <Title>예약 내역</Title>
      <List booklist={booklist} />
    </>
  );
}

export default BookingList;
