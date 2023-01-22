import { useState } from 'react';
import { CloseBtn, PopupBtn } from '../Atom';
import PayPopup from './PayPopup';

interface Props {
  payList: [
    {
      couponId: number;
      salePrice: number;
      leisureName: string;
      price: number;
      pictureUrl: string;
      persons: number;
      startAt: Array<string>;
      endAt: Array<string>;
    }
  ];
  cart?: boolean;
  coupon?: number;
}
function PayProduct(props: Props) {
  const [coupon, setCoupon] = useState(0);

  const getCouponData = (couponPrice: number) => {
    setCoupon(couponPrice);
  };
  const { payList, cart } = props;

  const payListMap = payList.map((item, idx) => (
    <div
      key={item.leisureName + idx}
      className="flex flex-wrap relative items-start py-5 border-t border-gray-400"
    >
      {cart && <CloseBtn addClass="absolute top-2 right-0" />}
      <img src={item.pictureUrl} alt="" className="w-52 rounded-xl" />
      <div className="ml-5 flex-grow">
        <h5 className="mb-2 text-xl font-bold">{item.leisureName}</h5>
        <ul>
          <li>{`${item.startAt[0]}년 ${item.startAt[1]}월 ${item.startAt[2]}일 ${item.startAt[3]}시 ~ ${item.endAt[0]}년 ${item.endAt[1]}월 ${item.endAt[2]}일 ${item.endAt[2]}시`}</li>
          <li>{item.persons}명</li>
        </ul>
        <div className="mt-3">
          <p>
            <strong className="text-lg">{item.price + item.salePrice}</strong>원
          </p>
          {!cart && (
            <>
              <PopupBtn addClass="btn-block btn-secondary mt-2 justify-between font-normal">
                쿠폰 할인 <strong className="text-lg">{coupon}원</strong>
              </PopupBtn>
              <PayPopup getCouponData={getCouponData} listIdx={idx} />
            </>
          )}
        </div>
      </div>
    </div>
  ));

  return <>{payListMap}</>;
}

export default PayProduct;
