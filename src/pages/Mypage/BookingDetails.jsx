import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../components/Atom';
import Details from '../../components/Mypage/Details';

function BookingDetails() {
  return (
    <>
      <Title>상세보기</Title>
      <Details />
      <div className="mt-5 text-right">
        <Link to="/mypage/booking/cancel" className="btn btn-secondary px-10">
          예약 취소 요청
        </Link>
      </div>
    </>
  );
}

export default BookingDetails;
