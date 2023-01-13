import React from 'react';

// assets
import roomImg from '../../assets/img_room.jpeg';

function InfoBook(props) {
  const { booklist } = props;

  const booklistMap = booklist.map((item, idx) => (
    <div
      key={item.roomName + idx}
      className="flex flex-wrap items-start py-5 border-t border-gray-400"
    >
      <label className="block mr-3">
        <input
          type="checkbox"
          checked="checked"
          className="checkbox checkbox-primary"
        />
      </label>
      <img src={roomImg} alt="" className="w-40 rounded-xl" />
      <div className="ml-5">
        <h5 className="mb-2 text-xl font-bold">{item.roomName}</h5>
        <ul>
          <li>{item.date}</li>
          <li>{item.num}명</li>
        </ul>
        <div className="mt-3">
          <strong className="text-lg">{item.price}</strong>원 x {item.day}박
          <span className="block badge badge-primary badge-outline">
            5천원 쿠폰
          </span>
          <span className="block mt-3 text-xs">
            2023.02.20 00:00 전까지 <strong>무료취소</strong>
          </span>
        </div>
      </div>
    </div>
  ));

  return <>{booklistMap}</>;
}

export default InfoBook;
