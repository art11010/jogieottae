import React from 'react';

// assets
import list from '../assets/list.jpeg';

// style
import tw from 'tailwind-styled-components';
export const UlCss = tw.ul`
  mt-2
  grid
  grid-cols-4
  gap-4
`;

function RoomList() {
  const roomArr = [
    { title: '파리, 프랑스', date: '2월 25일 ~ 3월 3일', imgSrc: list },
    { title: '도쿄, 일본', date: '2월 25일 ~ 3월 3일', imgSrc: list },
    { title: 'Blenio, 스위스', date: '2월 25일 ~ 3월 3일', imgSrc: list },
    { title: '베를린, 독일', date: '2월 25일 ~ 3월 3일', imgSrc: list },
  ];
  const roomMap = roomArr.map((lst, idx) => (
    <li key={idx}>
      <button>
        <img src={lst.imgSrc} alt="" className="rounded-xl" />
        <p className="mt-2">
          {lst.title}
          <br />
          {lst.date}
          <br />
          <span>
            <b>₩289,314</b> /박
          </span>
        </p>
      </button>
    </li>
  ));
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold">속세를 벗어난 숙소</h3>
      <UlCss>{roomMap}</UlCss>
    </div>
  );
}

export default RoomList;
