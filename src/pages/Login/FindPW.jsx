import React from 'react';
import { Link } from 'react-router-dom';
import * as L from './Login.style';

import { Button, Input, ShadowBox, TitleSub } from '../../components/Atom';

function Join() {
  return (
    <ShadowBox addclass="w-500 m-auto mt-40 mb-40">
      <TitleSub addclass="text-center mb-5">비밀번호 찾기</TitleSub>
      <L.titleDesc>임시 비밀번호를 보내드립니다.</L.titleDesc>
      <Input id="email" placeholder="이메일 주소" />
      <Button addclass="btn-block mt-3 mb-3">다음</Button>
      <L.titleDesc>아이디가 기억나지 않는다면? <Link to="/login/FindID" className="text-main ml-2">아이디 찾기</Link></L.titleDesc>
    </ShadowBox>
  );
}

export default Join;
