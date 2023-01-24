import React, { useState } from 'react';
import {
  TitleSub,
  BorderBox,
  Radio,
  PopupBtn,
  Popup,
  PopupCloseBtn,
} from '../Atom';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCouponList, putCouponList, delCouponList } from '../../api/coupon';

interface Item {
  id: number;
  salePrice: number;
  customerId: number;
  couponGroupId: number;
  endTime: string;
}

interface Props {
  listIdx: number;
  orderItemId: number;
}

function PayPopup(props: Props) {
  const client = useQueryClient();
  client.invalidateQueries(['couponGet']);
  const { listIdx, orderItemId } = props;

  const [putCoupon, setPutCoupon] = useState({
    couponPrice: 0,
    itemId: 0,
    couponId: 0,
  });

  const { data: couponList, isLoading: couponLoading } = useQuery(
    ['couponGet'],
    getCouponList
  );
  if (couponLoading) return <React.Fragment>Loading...</React.Fragment>;

  const couponListMap = couponList.map((item: Item, idx: number) => (
    <Radio
      id={'coupon' + idx}
      name={'coupon' + listIdx}
      key={idx}
      value={item.salePrice}
      onChange={(e: { target: { value: number } }) => {
        setPutCoupon({
          ...putCoupon,
          couponPrice: e.target.value,
          itemId: orderItemId,
          couponId: item.couponGroupId,
        });
      }}
    >
      {item.salePrice}원 할인
      <span className="ml-3 text-sm text-gray-400">
        {item.endTime.replaceAll('-', '.')}까지 사용 가능
      </span>
    </Radio>
  ));

  return (
    <>
      <PopupBtn
        id={'couponPopup' + listIdx}
        addClass="btn-block btn-secondary mt-2 justify-between font-normal"
        onClick={() => {
          {
            putCoupon.couponPrice !== 0 && delCouponList(putCoupon.itemId);
          }
        }}
      >
        쿠폰 할인 <strong className="text-lg">{putCoupon.couponPrice}원</strong>
      </PopupBtn>
      <Popup id={'couponPopup' + listIdx}>
        <TitleSub addClass="mb-2">쿠폰 할인</TitleSub>
        <PopupCloseBtn
          addClass="absolute top-3 right-3"
          id={'couponPopup' + listIdx}
        />
        <BorderBox addClass="mt-5">
          <h5 className="text-xl font-bold">보유 쿠폰</h5>
          <div className="mt-3 pt-2 border-t border-gray-400">
            <Radio
              id="coupon"
              name={'coupon' + listIdx}
              checked
              onChange={() => {
                setPutCoupon({
                  ...putCoupon,
                  couponPrice: 0,
                  itemId: orderItemId,
                  couponId: 0,
                });
              }}
            >
              적용 안함
            </Radio>
            {couponListMap}
          </div>
        </BorderBox>
        <div className="mt-6 text-right">
          <label
            htmlFor={'couponPopup' + listIdx}
            className="btn btn-primary"
            onClick={() => {
              {
                putCoupon.couponPrice !== 0 &&
                  putCouponList(putCoupon.itemId, putCoupon.couponId);
              }
            }}
          >
            적용하기
          </label>
        </div>
      </Popup>
    </>
  );
}

export default PayPopup;
