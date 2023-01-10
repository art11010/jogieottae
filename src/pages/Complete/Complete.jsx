import React from 'react';

import { ShadowBox } from '../../components/Atom';

import CompPay from './type/CompPay';
import CompJoin from './type/CompJoin';

function Complete() {
  return (
    <>
      <ShadowBox addclass="relative m-auto w-1/3 pt-0 px-0 pb-1/3 rounded-full text-center">
        <CompPay />
      </ShadowBox>
      <ShadowBox addclass="relative m-auto w-1/3 pt-0 px-0 pb-1/3 rounded-full text-center">
        <CompJoin />
      </ShadowBox>
    </>
  );
}

export default Complete;
