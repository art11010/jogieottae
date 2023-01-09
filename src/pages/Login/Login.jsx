import React from 'react';
import { Link } from 'react-router-dom';
import * as L from './Login.style';

import { Button, Input, ShadowBox, TitleSub } from '../../components/Atom';

function Login() {
  return (
    <>
      <div className="w-500 m-auto mt-40 mb-40">
        <ShadowBox addclass="h-full">
          <TitleSub addclass="text-center">로그인</TitleSub>
          <Input id="email" placeholder="이메일 주소" />
          <Input id="pw" placeholder="비밀번호" />
          <Button addclass="btn-block mt-3 mb-3">로그인</Button>
          <L.multipleLogin>OR</L.multipleLogin>
          <Button addclass="btn-block mt-3 border-transparent bg-kakao text-black hover:bg-black hover:border-black hover:text-white">카카오로 로그인</Button>
        </ShadowBox>
        <div className="flex items-center justify-center m-auto mt-5">
          <L.loginLink><Link to="/login/findID">아이디 찾기</Link></L.loginLink>
          <L.loginLink><Link to="/login/findPW">비밀번호 찾기</Link></L.loginLink>
          <L.loginLink><Link to="/login/join">회원가입</Link></L.loginLink>
        </div>
      </div>
    </>
  );
}

export default Login;
