import { Link } from 'react-router-dom';
import { Title, TitleSub, BorderBox } from '../../components/Atom';
import BookingDetailsBox from '../../components/Mypage/BookingDetailsBox';

function BookingDetails() {
  return (
    <>
      <Title>상세보기</Title>
      <BorderBox addClass="mt-5">
        <TitleSub>주문일자 : 2022.12.25 (일)</TitleSub>
        <p className="mt-3 ml-3 text-lg">
          <strong>예약자 정보 : </strong>김말똥, gmail@gmail.com
          <br />
          <strong>총 결제 금액 : </strong>320000원
        </p>
        <BookingDetailsBox />
      </BorderBox>
      <div className="mt-5 text-right">
        <Link to="/mypage/booking/cancel" className="btn btn-secondary px-10">
          예약 취소 요청
        </Link>
      </div>
    </>
  );
}

export default BookingDetails;
