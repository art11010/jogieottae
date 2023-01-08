import React from 'react';
import * as L from './Login.style';

import { Button, Input, ShadowBox, TitleSub } from '../../components/Atom';

function Login() {
  return (
    <>
      <div className="w-1/4 m-auto">
        <ShadowBox addclass="h-full">
          <TitleSub addclass="text-center">로그인</TitleSub>
          <Input id="email" placeholder="이메일 주소" />
          <Input id="pw" placeholder="비밀번호" />
          <Button addclass="btn-block mt-3 mb-3">로그인</Button>
          <L.multipleLogin>OR</L.multipleLogin>
          <Button addclass="btn-block mt-3 btn-accent">카카오로 로그인</Button>
        </ShadowBox>
      </div>
    </>
  );
}

export default Login;
