import React from 'react';
import { PopupBtn } from '../Atom';

function PayPrice(props) {
  const { booklist, cart } = props;

  return (
    <>
      <div className="py-5 px-2 border-t border-gray-400">
        <p className="flex justify-between">
          예약 금액 <strong className="text-lg">{booklist[0].price}원</strong>
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
              <strong className="text-lg">{booklist[0].price}원</strong>
            </>
          ) : (
            <>
              총 선택 상품 <strong className="text-lg">3건</strong>
            </>
          )}
        </p>
      </div>
    </>
  );
}

export default PayPrice;
