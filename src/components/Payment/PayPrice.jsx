import React from 'react';
import { TitleSub, BorderBox, Popup, PopupBtn, Radio } from '../Atom';

function PayPrice(props) {
  const { booklist, cart } = props;
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
    <>
      <div className="py-5 px-2 border-t border-gray-400">
        <p className="flex justify-between">
          예약 금액 <strong className="text-lg">80,000원</strong>
        </p>
        {!cart && (
          <PopupBtn addClass="btn-block btn-secondary mt-2 justify-between font-normal">
            쿠폰 할인 <strong className="text-lg">-5,000원</strong>
          </PopupBtn>
        )}
        <p className="flex justify-between mt-10 pt-5 border-t border-gray-400">
          {!cart ? (
            <>
              총 결제 금액{' '}
              <strong className="text-lg">-{booklist[0].price}원</strong>
            </>
          ) : (
            <>
              총 선택 상품 <strong className="text-lg">3건</strong>
            </>
          )}
        </p>
      </div>
      <Popup closeBtn>
        <TitleSub addClass="mb-2">쿠폰 할인</TitleSub>
        {booklistMap}
        <div className="mt-6 text-right">
          <a href="#" className="btn btn-primary">
            적용하기
          </a>
        </div>
      </Popup>
    </>
  );
}

export default PayPrice;
