import React from 'react';

import ShadowBox from '../../components/ShadowBox';
import { Button, Title, TitleSub } from '../../components/Atom';

// Pay
import BookInfo from './type/BookInfo';
import Person from './type/Person';
import Price from './type/Price';

function Payment() {
  return (
    <div className="container">
      <Title text="예약하기" />
      <div className="mt-10 grid grid-cols-2 gap-10 items-start">
        <ShadowBox>
          <TitleSub addclass="mb-2" text="예약자 정보" />
          <Person />
          <TitleSub addclass="mb-2" text="예약 정보" />
          <BookInfo />
        </ShadowBox>
        <ShadowBox>
          <TitleSub addclass="mb-2" text="금액 정보" />
          <Price />
          <Button addclass="mt-3 btn-block" text="예약하기" />
        </ShadowBox>
      </div>
    </div>
  );
}

export default Payment;
