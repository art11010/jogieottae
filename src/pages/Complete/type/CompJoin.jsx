import React from 'react';

import { Alink, Button, TitleSub } from '../../../components/Atom';

// assets
import icoJoin from '../../../assets/ico_comp-join.png';

function CompPay() {
  return (
    <div className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2">
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
    </div>
  );
}

export default CompPay;
