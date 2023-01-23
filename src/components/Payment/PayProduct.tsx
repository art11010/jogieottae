import React, { useState } from 'react';
import { Button, PopupBtn, IconX } from '../Atom';
import PayPopup from './PayPopup';

import { useMutation } from '@tanstack/react-query';
import { delCartList } from '../../api/cart';

interface Props {
  payList: {
    orderItemList: [
      {
        orderItemId: number;
        name: string;
        price: number;
        pictureUrl: string;
        persons: number;
        startAt: string;
        endAt: string;
      }
    ];
    totalPrice: number;
  };
  cart?: boolean;
  coupon?: number;
}
function PayProduct(props: Props) {
  const { payList, cart } = props;

  const payListMap = payList.orderItemList.map((item, idx) => {
    const [coupon, setCoupon] = useState(0);

    const { mutate: cartdelList, isLoading: cartdelLoading } =
      useMutation(delCartList);
    if (cartdelLoading)
      return <React.Fragment key={item.name + idx}>Loading...</React.Fragment>;

    const getCouponData = (couponPrice: number) => {
      setCoupon(couponPrice);
    };

    return (
      <div
        key={item.name + idx}
        className="flex flex-wrap relative items-start py-5 border-t border-gray-400"
      >
        {cart && (
          <Button
            addClass="btn-circle btn-ghost absolute top-2 right-0"
            onClick={() => {
              cartdelList(item.orderItemId);
            }}
          >
            <IconX />
          </Button>
        )}
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-34846249/original/4fe9caaa-95b2-4113-b283-5fdfb0d9f2c0.jpeg?im_w=720"
          alt=""
          className="w-52 rounded-xl"
        />
        <div className="ml-5 flex-grow">
          <h5 className="mb-2 text-xl font-bold">{item.name}</h5>
          <ul>
            <li>
              {`${item.startAt.replaceAll('-', '.').replace('T', ' ')} ~ 
                ${item.endAt.replaceAll('-', '.').replace('T', ' ')}`}
            </li>
            <li>{item.persons}명</li>
          </ul>
          <div className="mt-3">
            <p>
              <strong className="text-lg">{item.price}</strong>원
            </p>
            {!cart && (
              <>
                <PopupBtn
                  id={'couponPopup' + idx}
                  addClass="btn-block btn-secondary mt-2 justify-between font-normal"
                >
                  쿠폰 할인 <strong className="text-lg">{coupon}원</strong>
                </PopupBtn>
                <PayPopup getCouponData={getCouponData} listIdx={idx} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  });

  return <>{payListMap}</>;
}

export default PayProduct;
