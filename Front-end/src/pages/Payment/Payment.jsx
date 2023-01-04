import React from 'react';

import ShadowBox from '../../components/ShadowBox';
import { Button, Input, Title } from '../../components/Atom';

import listImg from '../../assets/list.jpeg';

function Payment() {
  return (
    <div className="container">
      <Title text="예약하기" />
      <div className="grid grid-cols-2 gap-10 items-start">
        <ShadowBox addclass="mt-10">
          <h4 className="mb-2 text-2xl font-bold ">예약 정보</h4>
          <div className="flex items-start py-5 border-t border-gray-400">
            <img src={listImg} alt="" className="w-48 rounded-xl" />
            <div className="ml-5">
              <h5 className="mb-2 text-xl font-bold">마포 신라스테이</h5>
              <ul>
                <li>
                  <strong className="block">날짜</strong>2월 25일 ~ 2월 26일
                </li>
                <li>
                  <strong className="block">게스트</strong>2명
                </li>
                <li className="mt-5">
                  <strong className="text-lg">80,000</strong>원 x 1박
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start py-5 border-t border-gray-400">
            <img src={listImg} alt="" className="w-48 rounded-xl" />
            <div className="ml-5">
              <h5 className="mb-2 text-xl font-bold">마포 신라스테이</h5>
              <ul>
                <li>
                  <strong className="block">날짜</strong>2월 25일 ~ 2월 26일
                </li>
                <li>
                  <strong className="block">게스트</strong>2명
                </li>
                <li className="mt-5">
                  <strong className="text-lg">80,000</strong>원 x 1박
                </li>
              </ul>
            </div>
          </div>
        </ShadowBox>
        <ShadowBox addclass="mt-10">
          <h4 className="mb-2 text-2xl font-bold ">금액 정보</h4>
          <div className="py-5 px-2 border-t border-gray-400">
            <ul>
              <li className="flex justify-between">
                예약 금액 <strong className="text-lg">80,000원</strong>
              </li>
              <li>
                <button className="flex justify-between items-center p-1 mt-2 w-full border border-gray-300 bg-gray-100 rounded-md">
                  쿠폰 할인 <strong className="text-lg">-5,000원</strong>
                </button>
              </li>
              <li className="flex justify-between mt-10 pt-5 border-t border-dashed border-gray-400">
                총 결제 금액 <strong className="text-lg">-75,000원</strong>
              </li>
            </ul>
            <Button text="예약하기" />
          </div>
        </ShadowBox>
      </div>
    </div>
  );
}

export default Payment;
