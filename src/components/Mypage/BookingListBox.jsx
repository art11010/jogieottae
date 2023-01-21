import React from 'react';
import { Link } from 'react-router-dom';
import { TitleSub, BorderBox } from '../Atom';

// assets
import roomImg from '../../assets/img_room.jpeg';

function BookingListBox(props) {
  const { booklist } = props;

  const booklistMap = booklist.map((lst, idx) => (
    <BorderBox key={lst.roomName + idx}>
      <div className="pb-2 flex items-center justify-between border-b border-gray-400">
        <TitleSub>{lst.paydata}</TitleSub>
        <Link to="/mypage/booking/details" className="text-main">
          상세보기 &gt;
        </Link>
      </div>

      <div className="pt-5 border-t border-gray-400">
        <button>
          <img src={roomImg} alt="" className="w-full rounded-xl" />
        </button>
        <div className="mt-5">
          <p className="text text-gray-400">예약번호 : Y01010101010101</p>
          <h4 className="my-2 text-2xl font-bold">{lst.roomName} 외 2건</h4>
          <p>
            {lst.date}, {lst.num}명
          </p>
          <span className="block mt-3 text-xs">
            2023.02.20 00:00 전까지 <strong>무료취소</strong>
          </span>
          <Link
            to="/mypage/booking/review"
            className="btn btn-primary mt-5 w-full"
          >
            리뷰 작성하기
          </Link>
        </div>
      </div>
    </BorderBox>
  ));

  return <div className="mt-5 grid grid-cols-3 gap-5">{booklistMap}</div>;
}

export default BookingListBox;
