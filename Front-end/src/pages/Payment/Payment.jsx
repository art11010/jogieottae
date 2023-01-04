import React from 'react';

import ShadowBox from '../../components/ShadowBox';
import Pay from '../../components/Pay';
import { Title } from '../../components/Atom';

function Payment() {
  return (
    <div className="container">
      <Title text="예약하기" />
      <div className="grid grid-cols-2 gap-10 items-start">
        <ShadowBox addclass="mt-10">
          <Pay text="예약자 정보" type="person" />
          <Pay text="예약 정보" type="bookinfo" />
        </ShadowBox>
        <ShadowBox addclass="mt-10">
          <Pay text="금액 정보" type="price" />
        </ShadowBox>
      </div>
    </div>
  );
}

export default Payment;
