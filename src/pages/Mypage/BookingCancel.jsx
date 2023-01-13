import React from 'react';
import { Title, Button } from '../../components/Atom';
import Cancel from '../../components/Mypage/Cancel';

function BookingCancel() {
  return (
    <>
      <Title>예약 취소 요청</Title>
      <Cancel />
      <div className="mt-5 text-right">
        <Button addClass="px-10">예약 취소 요청</Button>
      </div>
    </>
  );
}

export default BookingCancel;
