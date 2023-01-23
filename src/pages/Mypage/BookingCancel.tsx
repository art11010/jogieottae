import {
  Title,
  TitleSub,
  BorderBox,
  Popup,
  PopupBtn,
  Alink,
} from '../../components/Atom';
import BookingCancelBox from '../../components/Mypage/BookingCancelBox';

function BookingCancel() {
  return (
    <>
      <Title>예약 취소 요청</Title>
      <BorderBox addClass="mt-5">
        <TitleSub>주문일자 : 2022.12.25 (일)</TitleSub>
        <p className="mt-3 ml-3 text-lg">
          <strong>예약자 정보 : </strong>김말똥, gmail@gmail.com
          <br />
          <strong>총 결제 금액 : </strong>320000원
        </p>
      </BorderBox>
      <BookingCancelBox />
      <div className="mt-5 text-right">
        <PopupBtn addClass="px-10">예약 취소 요청</PopupBtn>
      </div>
      <Popup addClass="text-center">
        <TitleSub addClass="mt-10 mb-12 text-center">
          취소 요청이 완료되었습니다.
        </TitleSub>
        <Alink to="/mypage/booking/" addClass="px-10">
          확인
        </Alink>
      </Popup>
    </>
  );
}

export default BookingCancel;
