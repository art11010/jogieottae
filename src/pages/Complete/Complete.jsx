import React from 'react';

import { ShadowBox } from '../../components/Atom';

import Join from '../../components/Complete/Join';
import Payment from '../../components/Complete/Payment';

function Complete() {
  return (
    <>
      <ShadowBox addClass="relative m-auto w-1/3 pt-0 px-0 pb-1/3 rounded-full text-center">
        <Join />
      </ShadowBox>
      <ShadowBox addClass="relative m-auto w-1/3 pt-0 px-0 pb-1/3 rounded-full text-center">
        <Payment />
      </ShadowBox>
    </>
  );
}

export default Complete;
