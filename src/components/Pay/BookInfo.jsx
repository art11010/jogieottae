import React from 'react';

// assets
import roomImg from '../../assets/img_room.jpeg';

function Pay(props) {
  const { roomdata } = props;

  const payMap = roomdata.map((lst, idx) => (
    <div
      key={lst.roomName + idx}
      className="flex flex-wrap items-start py-5 border-t border-gray-400"
    >
      <label class="block mr-3">
        <input
          type="checkbox"
          checked="checked"
          class="checkbox checkbox-primary"
        />
      </label>
      <img src={roomImg} alt="" className="w-40 rounded-xl" />
      <div className="ml-5">
        <h5 className="mb-2 text-xl font-bold">{lst.roomName}</h5>
        <ul>
          <li>{lst.date}</li>
          <li>{lst.num}명</li>
        </ul>
        <div className="mt-3">
          <strong className="text-lg">{lst.price}</strong>원 x {lst.day}박
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

  return <>{payMap}</>;
}

export default Pay;
