import React from 'react';
interface Props {
  addClass?: string;
}

function Select(props: Props) {
  const { addClass } = props;
  return (
    <select
      className={
        'select select-bordered border-gray-400 focus:outline-none' + addClass
      }
    >
      <option disabled selected>
        선택해주세요
      </option>
      <option>단순 변심</option>
      <option>예약정보 변경 (상품, 일정 등)</option>
      <option>중복예약 / 이용조건 불만</option>
      <option>타사 최저가 상품 이용</option>
      <option>업소 요청에 따른 이용불가</option>
    </select>
  );
}

export default Select;
