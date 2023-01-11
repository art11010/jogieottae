import React from 'react';
import * as L from './Login.style';

import { Button, Input, ShadowBox, TitleSub } from '../../components/Atom';

function FindID() {
  return (
    <ShadowBox addclass="w-500 m-auto mt-40 mb-40">
      <TitleSub addclass="text-center mb-5">아이디 찾기</TitleSub>
      <Input id="email" placeholder="이메일 주소" />
      <L.titleDesc className="mt-3 text-red-500">등록된 아이디가 아닙니다.</L.titleDesc>
      <Button addclass="btn-block mt-5 mb-3">다음</Button>
    </ShadowBox>
  );
}

export default FindID;
