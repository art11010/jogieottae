import React from 'react';

// assets
import roomImg from '../../assets/img_room.jpeg';

function Pay() {
  const payArr = [
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

  const payMap = payArr.map((lst, idx) => (
    <div
      key={lst.roomName + idx}
      className="flex items-start py-5 border-t border-gray-400"
    >
      <img src={roomImg} alt="" className="w-48 rounded-xl" />
      <div className="ml-5">
        <h5 className="mb-2 text-xl font-bold">{lst.roomName}</h5>
        <ul>
          <li>
            <strong className="block">날짜</strong>
            {lst.date}
          </li>
          <li>
            <strong className="block">게스트</strong>
            {lst.num}명
          </li>
          <li className="mt-5">
            <strong className="text-lg">{lst.price}</strong>원 x {lst.day}박
          </li>
          <li>
            <span className="text-xs">
              2023.02.20 00:00 전까지 <strong>무료취소</strong>
            </span>
          </li>
        </ul>
      </div>
    </div>
  ));

  return <>{payMap}</>;
}

export default Pay;
