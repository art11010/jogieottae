import React from 'react';
import { Button, TitleSub, Title } from '../../components/Atom';
import * as M from './Mypage.style';

function BookingReview() {
  return (
    <>
      <Title addClass="mb-10">리뷰 작성하기</Title>
      상품 영역
      <TitleSub addClass="mb-5">
        <span className="text-main">ㅇㅇㅇㅇㅇㅇ</span>의 방문은 어떠셨나요?
      </TitleSub>
      별점..?
      <label htmlFor="reviewWrite" className="block mb-2">
        방문에 대한 소감을 20자 이상 작성해 주세요.
      </label>
      <M.reviewTextArea id="reviewWrite" placeholder="내용"></M.reviewTextArea>
      <div className="flex justify-center mt-5">
        <Button addClass="btn-secondary-focus pl-8 pr-8">작성</Button>
      </div>
    </>
  );
}

export default BookingReview;
