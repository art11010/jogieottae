import { TitleSub } from '../Atom';

// assets
import roomImg from '../../assets/img_room.jpeg';

function BookingDetailsBox() {
  return (
    <>
      <div className="mt-10 pt-10 flex items-center border-t border-gray-400">
        <div className="pr-10 border-r border-gray-400">
          <TitleSub addClass="mb-5">상품 및 이용정보</TitleSub>
          <button className="text-left">
            <img src={roomImg} alt="" className="w-60 rounded-xl" />
            <TitleSub addClass="mt-5">마포 신라스테이</TitleSub>
          </button>
          <p className="mt-2">
            2월 25일 ~ 2월 26일, 2명
            <br />
            체크인 17:00 | 체크아웃 11:00
          </p>
        </div>
        <dl className="pl-10 flex-grow text-lg">
          <dt className="mb-5">
            <TitleSub>금액 및 할인 정보</TitleSub>
          </dt>
          <dd>
            <strong className="px-5">예약 금액</strong> 80000원
          </dd>
          <dd>
            <strong className="px-5">할인 금액</strong> -5000원
          </dd>
          <dd className="mt-5 pt-5 border-dashed border-gray-400 border-t">
            <strong className="px-5">결제 금액</strong> 75000원
          </dd>
        </dl>
      </div>
    </>
  );
}

export default BookingDetailsBox;
