import React from 'react';
import { useLocation } from 'react-router-dom';

import { ShadowBox } from '../../components/Atom';
import CompleteType from '../../components/Complete/CompleteType';

function Complete() {
  const pathName = useLocation().pathname.split('/')[1];
  return (
    <>
      <ShadowBox addClass="relative m-auto w-1/3 pt-0 px-0 pb-1/3 rounded-full text-center">
        <CompleteType type={pathName} />
      </ShadowBox>
    </>
  );
}

export default Complete;
