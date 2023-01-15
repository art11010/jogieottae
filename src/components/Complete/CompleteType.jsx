import React from 'react';

import { Alink, TitleSub } from '../Atom';

// assets
import icoPay from '../../assets/ico_comp-pay.png';
import icoJoin from '../../assets/ico_comp-join.png';
import icoDelete from '../../assets/ico_comp-delete.png';

function CompleteType(props) {
  const { type } = props;
  return (
    <div className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2">
      {type == 'payment' && (
        <>
          <TitleSub addClass="pb-5">예약이 완료되었습니다.</TitleSub>
          <p>예약번호 : Y01010101010101</p>
          <p>결제 금액 : 100000원</p>
          <img
            src={icoPay}
            alt="예약 완료 아이콘"
            className="m-auto mt-10 pb-5 w-20"
          />
          <Alink to="/mypage/booking" addClass="mt-5 px-10">
            예약내역 확인하기
          </Alink>
        </>
      )}
      {type == 'join' && (
        <>
          <TitleSub addClass="pb-5">가입이 완료되었습니다.</TitleSub>
          <p>
            지금 바로 조기어때의 다양한 서비스를 <br />
            이용하실 수 있습니다.
          </p>
          <img
            src={icoJoin}
            alt="가입 완료 아이콘"
            className="m-auto mt-10 pb-5 w-20"
          />
          <Alink to="/" addClass="mt-5 px-10">
            홈으로
          </Alink>
        </>
      )}
      {type == 'delete' && (
        <>
          <TitleSub addClass="pb-5">탈퇴가 완료되었습니다.</TitleSub>
          <p>그동안 조기어때를 이용해 주셔서 감사합니다.</p>
          <img
            src={icoDelete}
            alt="탈퇴 완료 아이콘"
            className="m-auto mt-10 pb-5 w-20"
          />
          <Alink to="/" addClass="mt-5 px-10">
            홈으로
          </Alink>
        </>
      )}
    </div>
  );
}

export default CompleteType;
