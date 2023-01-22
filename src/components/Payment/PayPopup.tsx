import { TitleSub, BorderBox, Radio, Popup, CloseBtn } from '../Atom';

import { useQuery } from '@tanstack/react-query';
import { getCouponList } from '../../api/pay';

interface Item {
  id: number;
  salePrice: number;
  customerId: number;
  couponGroupId: number;
  endTime: Array<number>;
}

interface Props {
  listIdx: number;
  getCouponData: (couponPrice: number) => void;
}

function PayPopup(props: Props): string | any {
  const { getCouponData, listIdx } = props;
  const { data: couponList, isLoading: couponLoading } = useQuery(
    ['couponGet'],
    getCouponList
  );
  if (couponLoading) return 'Loading...';

  const couponListMap = couponList.map((item: Item, idx: number) => (
    <Radio
      id={'coupon' + idx}
      name={'coupon' + listIdx}
      key={item.id + idx}
      value={item.salePrice}
      onChange={(e: { target: { value: number } }) => {
        getCouponData(e.target.value);
      }}
    >
      {item.salePrice}원 할인
    </Radio>
  ));

  return (
    <Popup>
      <TitleSub addClass="mb-2">쿠폰 할인</TitleSub>
      <CloseBtn addClass="absolute top-3 right-3" />
      <BorderBox addClass="mt-5">
        <h5 className="text-xl font-bold">보유 쿠폰</h5>
        <div className="mt-3 pt-2 border-t border-gray-400">
          <Radio id="coupon" name={'coupon' + listIdx} checked>
            적용 안함
          </Radio>
          {couponListMap}
        </div>
      </BorderBox>
      <div className="mt-6 text-right">
        <a href="#" className="btn btn-primary">
          적용하기
        </a>
      </div>
    </Popup>
  );
}

export default PayPopup;
