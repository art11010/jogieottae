import React from 'react';
import { TitleSub, BorderBox, Radio, Popup, CloseBtn } from '../Atom';

function PayPopup(props) {
  const { booklist } = props;
  const booklistMap = booklist.map((item, idx) => (
    <BorderBox key={item.roomName + idx} addClass="mt-5">
      <h5 className="text-xl font-bold">{item.roomName}</h5>
      <p>
        <strong className="text-lg">{item.price}</strong>원 x {item.day}박
        <br /> {item.date}, {item.num}명
      </p>
      <div className="mt-3 pt-2 border-t border-gray-400">
        <Radio id={'coupon' + idx} name={'coupon' + idx}>
          적용 안함
        </Radio>
        <Radio id={'coupon' + idx} name={'coupon' + idx}>
          5000원 할인
        </Radio>
      </div>
    </BorderBox>
  ));
  return (
    <Popup>
      <TitleSub addClass="mb-2">쿠폰 할인</TitleSub>
      <CloseBtn addClass="absolute top-3 right-3" />
      {booklistMap}
      <div className="mt-6 text-right">
        <a href="#" className="btn btn-primary">
          적용하기
        </a>
      </div>
    </Popup>
  );
}

export default PayPopup;
