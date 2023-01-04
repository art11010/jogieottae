import React from 'react';
import { Button, Radio } from '../Atom';

function Price() {
  return (
    <div className="py-5 px-2 border-t border-gray-400">
      <ul>
        <li className="flex justify-between">
          예약 금액 <strong className="text-lg">80,000원</strong>
        </li>
        <li>
          <button className="btn btn-block btn-secondary mt-2 flex justify-between font-normal">
            쿠폰 할인 <strong className="text-lg">-5,000원</strong>
          </button>
        </li>
        <li className="flex justify-between mt-10 pt-5 border-t border-gray-400">
          총 결제 금액 <strong className="text-lg">-75,000원</strong>
        </li>
      </ul>
      <div className="mt-5 px-5 border-t border-dashed border-gray-400">
        <Radio id="payType2" name="payType" label="카카오페이" checked />
        <Radio id="payType1" name="payType" label="카드 결제" />
      </div>
      <Button addclass="mt-3 btn-block" text="예약하기" />
    </div>
  );
}

export default Price;
