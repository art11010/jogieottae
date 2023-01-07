import React from 'react';
import * as L from './Login.style';

import { Button, Input, ShadowBox, Title, TitleSub } from '../../components/Atom';

function Login() {
  return (
    <>
      {/* <L.Logo>LOGO</L.Logo> */}
      <div className="w-1/4 m-auto">
        <ShadowBox addclass="h-full">
          <TitleSub addclass="text-center">로그인</TitleSub>
          <Input id="email" placeholder="이메일 주소"></Input>
          <Input id="pw" placeholder="비밀번호"></Input>
          <Button addclass="btn-block mt-3 mb-3" text="로그인"></Button>
          <L.multipleLogin>OR</L.multipleLogin>
          <Button addclass="btn-block mt-3 btn-accent" text="카카오로 로그인"></Button>
        </ShadowBox>
      </div>
    </>
  );
}

export default Login;
