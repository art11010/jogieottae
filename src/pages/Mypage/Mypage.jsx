import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Title } from '../../components/Atom';

// User
import UserLayout from '../../components/User/UserLayout';

function Mypage() {
  return (
    <UserLayout onMenu="mypage">
      <div className="w-2/4">
        <Title addclass="mb-8">회원정보 변경</Title>
        <div className="flex items-center justify-between gap-3">
          <Input id="email" placeholder="이메일 주소" addclass="w-3/5" />
          <Button addclass="w-2/5 mt-3">변경</Button>
        </div>
        <div className="flex justify-between gap-3">
          <Input id="pw" placeholder="비밀번호" addclass="w-3/5" />
          <Button addclass="w-2/5 mt-3">변경</Button>
        </div>
        <div className="flex justify-between gap-3">
          <Input id="phone" placeholder="휴대폰 번호" addclass="w-3/5" />
          <Button addclass="w-2/5 mt-3">인증번호 발송</Button>
        </div>
        <div className="flex justify-between gap-3">
          <Input id="phoneCheck" placeholder="인증번호" addclass="w-3/5" />
          <Button addclass="w-2/5 mt-3">확인</Button>
        </div>
        <div className="flex justify-between gap-3">
          <Input id="nickname" placeholder="닉네임" addclass="w-3/5" />
          <Button addclass="w-2/5 mt-3">변경</Button>
        </div>
        <div className="flex justify-end mt-6 border-y border-b-0">
          <Link to="" className="btn btn-secondary-focus mt-6">
            회원 탈퇴
          </Link>
        </div>
      </div>
    </UserLayout>
  );
}

export default Mypage;
