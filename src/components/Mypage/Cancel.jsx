import React from 'react';
import { TitleSub, BorderBox, ShadowBox } from '../../components/Atom';

// assets
import roomImg from '../../assets/img_room.jpeg';
function Cancel() {
  return (
    <>
      <BorderBox addClass="mt-5">
        <TitleSub>주문일자 : 2022.12.25 (일)</TitleSub>
        <p className="text-gray-400">예약번호 : Y01010101010101</p>
        <div className="mt-10 pt-10 flex border-t border-gray-400">
          <label className="block mr-3">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-primary"
            />
          </label>
          <div>
            <TitleSub addClass="mb-5">상품 및 이용정보</TitleSub>
            <button className="text-left">
              <img src={roomImg} alt="" className="w-60 rounded-xl" />
              <TitleSub addClass="mt-5">마포 신라스테이</TitleSub>
            </button>
            <p className="mt-2">
              2월 25일 ~ 2월 26일, 2명
              <br />
              체크인 17:00 | 체크아웃 11:00
            </p>
          </div>
          <dl className="ml-10 pl-10 border-l border-gray-400 flex-grow text-lg">
            <dt className="mb-5">
              <TitleSub>예약자 정보</TitleSub>
            </dt>
            <dd>
              <strong className="px-5">이름</strong> 김말똥
            </dd>
            <dd>
              <strong className="px-5">휴대폰 번호</strong> 010-1234-1234
            </dd>
            <dt className="mt-10 mb-5 pt-10 border-t border-gray-400">
              <TitleSub>금액 및 할인 정보</TitleSub>
            </dt>
            <dd>
              <strong className="px-5">예약 금액</strong> 80000원
            </dd>
            <dd>
              <strong className="px-5">할인 금액</strong> -5000원
            </dd>
            <dd className="mt-5 pt-5 border-dashed border-gray-400 border-t">
              <strong className="px-5">결제 금액</strong> 75000원
            </dd>
            <dd className="mt-5 text-right text-base text-gray-400">
              2023.02.20 00:00 전까지 <strong>무료취소</strong>
            </dd>
          </dl>
        </div>
      </BorderBox>
      <ShadowBox addClass="mt-12">
        <div className="flex">
          <div>
            <TitleSub addClass="mb-5">
              취소 사유 <span className="text-main">*</span>
            </TitleSub>
            <select className="select select-bordered w-60 border-gray-400 focus:outline-none">
              <option disabled selected>
                선택해주세요
              </option>
              <option>단순 변심</option>
              <option>예약정보 변경 (상품, 일정 등)</option>
              <option>중복예약 / 이용조건 불만</option>
              <option>타사 최저가 상품 이용</option>
              <option>업소 요청에 따른 이용불가</option>
            </select>
          </div>
          <dl className="ml-10 pl-10 border-l border-gray-400 flex-grow text-lg">
            <dt className="mb-5">
              <TitleSub>취소 및 환불 예상 정보</TitleSub>
            </dt>
            <dd>
              <strong className="px-5">취소 상품 금액</strong> 80000원
            </dd>
            <dd>
              <strong className="px-5">할인 금액</strong> -5000원
            </dd>
            <dd>
              <strong className="px-5">예상 취소 수수료</strong> 0원
            </dd>
            <dd className="mt-5 pt-5 border-dashed border-gray-400 border-t">
              <strong className="px-5">환불 예상 금액</strong> 75000원
            </dd>
          </dl>
        </div>
      </ShadowBox>
    </>
  );
}

export default Cancel;
