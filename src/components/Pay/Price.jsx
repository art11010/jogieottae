import React from 'react';
import { TitleSub, BorderBox, Popup, Radio } from '../Atom';

function Price(props) {
  const { roomdata } = props;
  const payMap = roomdata.map((lst, idx) => (
    <BorderBox key={lst.roomName + idx} addclass="mt-5">
      <h5 className="text-xl font-bold">{lst.roomName}</h5>
      <p>
        <strong className="text-lg">{lst.price}</strong>원 x {lst.day}박
        <br /> {lst.date}, {lst.num}명
      </p>
      <div className="mt-3 pt-2 border-t border-gray-400">
        <Radio label="적용 안함" />
        <Radio label="5000원 할인" />
      </div>
    </BorderBox>
  ));

  return (
    <div className="py-5 px-2 border-t border-gray-400">
      <p className="flex justify-between">
        예약 금액 <strong className="text-lg">80,000원</strong>
      </p>
      <a
        href="#my-modal-2"
        className="btn btn-block btn-secondary mt-2 justify-between font-normal"
      >
        쿠폰 할인 <strong className="text-lg">-5,000원</strong>
      </a>
      <Popup>
        <TitleSub addclass="mb-2" text="쿠폰 할인" />
        {payMap}
      </Popup>
      <ul>
        <li></li>
        <li className="flex justify-between mt-10 pt-5 border-t border-gray-400">
          총 결제 금액 <strong className="text-lg">-75,000원</strong>
        </li>
      </ul>
    </div>
  );
}

export default Price;
