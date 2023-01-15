import React from 'react';

import { Button, Input, ShadowBox, TitleSub } from '../Atom';
import Error from '../Atom/Login/error';

function FindIDForm() {
  return (
    <ShadowBox addClass="w-500 m-auto mt-40 mb-40">
      <TitleSub addClass="text-center mb-5">아이디 찾기</TitleSub>
      <Input id="email" placeholder="이메일 주소" />
      <Error>등록된 아이디가 아닙니다.</Error>
      <Button addClass="btn-block mt-5 mb-3">다음</Button>
    </ShadowBox>
  );
}

export default FindIDForm;
