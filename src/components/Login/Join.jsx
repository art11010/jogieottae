import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Input, ShadowBox, TitleSub } from '../Atom';
import Error from '../Atom/Login/error';

function JoinForm() {
  return (
    <ShadowBox addClass="w-500 m-auto mt-20 mb-40">
      <TitleSub addClass="text-center mb-5">회원가입</TitleSub>
      <>
        <Input id="email" placeholder="이메일 주소" />
        <Error>이미 사용중이거나 탈퇴한 이메일입니다.</Error>
      </>
      <>
        <Input id="pw" placeholder="비밀번호" />
        <Input id="pwCheck" placeholder="비밀번호 확인" />
        <Error>비밀번호가 동일하지 않습니다.</Error>
      </>
      <>
        <div className="flex items-center justify-between gap-3">
          <Input id="phone" placeholder="휴대폰 번호" addClass="w-3/5" />
          <Button addClass="w-2/5 mt-3">인증번호 발송</Button>
        </div>
        <Error>형식에 맞지 않는 번호입니다.</Error>
      </>
      <>
        <div className="flex items-center justify-between gap-3">
          <Input id="phoneCheck" placeholder="인증번호" addClass="w-3/5" />
          <Button addClass="w-2/5 mt-3">확인</Button>
        </div>
        <Error>잘못된 인증번호입니다. 다시 입력해 주세요</Error>
      </>
      <>
        <Input id="nickname" placeholder="닉네임" />
        <Error>이미 사용중인 닉네임입니다.</Error>
      </>
      <>
      <div className="mt-6 border-y border-b-0">
        <Link to="/complete" className="btn btn-primary w-full mt-6">
          회원가입
        </Link>
      </div>
      </>
    </ShadowBox>
  );
}

export default JoinForm;
