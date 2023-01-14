import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Button, Input, ShadowBox, TitleSub } from '../Atom';
import Error from '../Atom/Login/error';
import * as L from './Login.style';

function LoginForm() {
  const pathName = useLocation().pathname;
  const path = !pathName.includes('admin') ? 'login' : 'admin';

  return (
    <div className="w-500 m-auto mt-40 mb-40">
      <ShadowBox addClass="h-full">
        <TitleSub addClass="text-center">로그인</TitleSub>
        <Input id="email" placeholder="이메일 주소" />
        <Input id="pw" placeholder="비밀번호" />
        <Button addClass="btn-block mt-3 mb-3">로그인</Button>
        <Error>아이디 또는 비밀번호를 잘못 입력하셨습니다.</Error>
        {
          path == 'login'
          ? <>
              <L.multipleLogin>OR</L.multipleLogin>
              <Button addClass="btn-block mt-3 border-transparent bg-kakao text-black hover:bg-black hover:border-black hover:text-white">
                카카오로 로그인
              </Button>
            </>
          : null
        }
      </ShadowBox>
      <div className="flex items-center justify-center m-auto mt-5">
        <L.loginLink>
        {
          <>
            <Link to={`/${path}/findid`}>아이디 찾기</Link>
            <Link to={`/${path}/findpw`}>비밀번호 찾기</Link>
            <Link to={`/${path}/join`}>회원가입</Link>
          </>
        }
        </L.loginLink>
      </div>
    </div>
  );
}

export default LoginForm;
