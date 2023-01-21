import { TitleSub, BorderBox, Radio, Popup, CloseBtn } from '../Atom';

interface Props {
  paylist: [
    {
      leisureOrderItemId: number;
      sellerId: number;
      reservationId: string;
      couponId: number;
      salePrice: number;
      leisureName: string;
      addr: string;
      price: number;
      pictureUrl: string;
      persons: number;
      startAt: Array<string>;
      endAt: Array<string>;
    }
  ];
  cart?: boolean;
}

function PayPopup(props: Props) {
  const { paylist } = props;
  const paylistMap = paylist.map((item, idx) => (
    <BorderBox key={item.leisureName + idx} addClass="mt-5">
      <h5 className="text-xl font-bold">{item.leisureName}</h5>
      <p>
        <strong className="text-lg">{item.price}</strong>원
        <br />{' '}
        {`${item.startAt[0]}년 ${item.startAt[1]}월 ${item.startAt[2]}일 ~ ${item.endAt[0]}년 ${item.endAt[1]}월 ${item.endAt[2]}일`}
        , {item.persons}명
      </p>
      <div className="mt-3 pt-2 border-t border-gray-400">
        <Radio id={'coupon' + idx} name={'coupon' + idx} checked>
          적용 안함
        </Radio>
        {item.couponId && (
          <Radio id={'coupon' + idx} name={'coupon' + idx}>
            {item.salePrice}원 할인
          </Radio>
        )}
      </div>
    </BorderBox>
  ));
  return (
    <Popup>
      <TitleSub addClass="mb-2">쿠폰 할인</TitleSub>
      <CloseBtn addClass="absolute top-3 right-3" />
      {paylistMap}
      <div className="mt-6 text-right">
        <a href="#" className="btn btn-primary">
          적용하기
        </a>
      </div>
    </Popup>
  );
}

export default PayPopup;
