import { CloseBtn } from '../Atom';

interface Props {
  paylist: [
    {
      couponId: number;
      salePrice: number;
      leisureName: string;
      price: number;
      pictureUrl: string;
      persons: number;
      startAt: Array<string>;
      endAt: Array<string>;
    }
  ];
  cart?: boolean;
}
function PayProduct(props: Props) {
  const { paylist, cart } = props;

  const paylistMap = paylist.map((item, idx) => (
    <div
      key={item.leisureName + idx}
      className="flex flex-wrap relative items-start py-5 border-t border-gray-400"
    >
      {cart && (
        <>
          <CloseBtn addClass="absolute top-2 right-0" />
        </>
      )}
      <img src={item.pictureUrl} alt="" className="w-40 rounded-xl" />
      <div className="ml-5">
        <h5 className="mb-2 text-xl font-bold">{item.leisureName}</h5>
        <ul>
          <li>{`${item.startAt[0]}년 ${item.startAt[1]}월 ${item.startAt[2]}일 ${item.startAt[3]}시 ~ ${item.endAt[0]}년 ${item.endAt[1]}월 ${item.endAt[2]}일 ${item.endAt[2]}시`}</li>
          <li>{item.persons}명</li>
        </ul>
        <div className="mt-3">
          <p>
            {item.couponId && (
              <>
                <span className="line-through mr-2">
                  {item.price + item.salePrice}원
                </span>
              </>
            )}
            <strong className="text-lg">{item.price}</strong>원
          </p>
          {item.couponId && (
            <>
              <span className="block badge badge-primary badge-outline">
                {item.salePrice}원 쿠폰
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  ));

  return <>{paylistMap}</>;
}

export default PayProduct;
