import React from 'react';
import { Heart } from '../Atom';
// assets
import roomImg from '../../assets/img_room.jpeg';

function Room() {
  const roomArr = [
    { title: '파리, 프랑스', date: '2월 25일 ~ 3월 3일', imgSrc: roomImg },
    { title: '도쿄, 일본', date: '2월 25일 ~ 3월 3일', imgSrc: roomImg },
    { title: 'Blenio, 스위스', date: '2월 25일 ~ 3월 3일', imgSrc: roomImg },
    { title: '베를린, 독일', date: '2월 25일 ~ 3월 3일', imgSrc: roomImg },
  ];

  const roomMap = roomArr.map((lst, idx) => (
    <li key={lst.title + idx} className="relative">
      <Heart addClass="absolute top-2 right-2" />
      <button>
        <img src={lst.imgSrc} alt="" className="rounded-xl" />
        <p className="mt-2 px-2 text-left">
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

  return <ul className="mt-2 grid grid-cols-4 gap-10">{roomMap}</ul>;
}

export default Room;
