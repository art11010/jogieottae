import { TitleSub, BorderBox } from '../../components/Atom';

function BookingCancel() {
  return (
    <>
      <BorderBox addClass="mt-12">
        <div>
          {/* <div className="flex">
          <div>
            <TitleSub addClass="mb-5">
              취소 사유 <span className="text-main">*</span>
            </TitleSub>
            <select className="select select-bordered w-72 border-gray-400 focus:outline-none">
              <option>단순 변심</option>
              <option>예약정보 변경 (상품, 일정 등)</option>
              <option>중복예약 / 이용조건 불만</option>
              <option>타사 최저가 상품 이용</option>
              <option>업소 요청에 따른 이용불가</option>
            </select>
          </div>
          <dl className="ml-10 pl-10 border-l border-gray-400 flex-grow text-lg"> */}
          <dl className="flex-grow text-lg">
            <dt className="mb-5">
              <TitleSub>취소 및 환불 예상 정보</TitleSub>
            </dt>
            <dd>
              <strong className="px-5">취소 상품 금액</strong> 80000원
            </dd>
            <dd>
              <strong className="px-5">할인 금액</strong> -5000원
            </dd>
            <dd>
              <strong className="px-5">예상 취소 수수료</strong> 0원
            </dd>
            <dd className="mt-5 pt-5 border-dashed border-gray-400 border-t">
              <strong className="px-5">환불 예상 금액</strong> 75000원
            </dd>
          </dl>
        </div>
      </BorderBox>
    </>
  );
}

export default BookingCancel;
