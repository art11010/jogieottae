import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Title } from '../Atom';
import Error from '../Atom/Login/error';
import * as M from './Mypage.style';

function UserDeleteForm() {
  return (
    <div className="w-2/4">
      <Title addClass="mb-8">회원 탈퇴</Title>
      <Input id="pw" placeholder="비밀번호" />
      <Input id="pwCheck" placeholder="비밀번호 확인" />
      <Error addClass="justify-start">비밀번호를 다시 확인해주세요.</Error>
      <M.reviewTextArea id="deleteWrite" placeholder="탈퇴 이유를 적어주세요." className="mt-3 rounded-lg" />
      <div className="flex justify-end mt-6 border-y border-b-0">
        <Link to="/complete" className="btn btn-secondary-focus mt-6">
          회원 탈퇴
        </Link>
      </div>
    </div>
  );
}

export default UserDeleteForm;
