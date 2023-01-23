interface Props {
  payList: {
    cartItemList: [
      {
        orderItemId: number;
        name: string;
        price: number;
        pictureUrl: string;
        persons: number;
        startAt: string;
        endAt: string;
      }
    ];
    totalPrice: number;
  };
  cart?: boolean;
}

function PayPrice(props: Props) {
  const { payList, cart } = props;

  // let totalSalePrice = payList.reduce((acc, item) => {
  //   return acc + item.salePrice;
  // }, 0);

  return (
    <>
      <div className="py-5 px-2 border-t border-gray-400">
        <p className="flex justify-between">
          총 선택 상품{' '}
          <strong className="text-lg">{payList.cartItemList.length}건</strong>
        </p>
        <p className="flex justify-between">
          총 결제 금액{' '}
          <strong className="text-lg">
            {/* {totalSalePrice !== 0 && (
              <>
                <span className="line-through mr-2 font-normal text-base">
                  {totalPrice + totalSalePrice}원
                </span>
              </>
            )} */}
            {cart ? (
              <>{payList.totalPrice}원</>
            ) : (
              <>
                <span className="line-through mr-2 font-normal text-base">
                  {payList.totalPrice}원
                </span>
                {payList.totalPrice}원
              </>
            )}
          </strong>
        </p>
      </div>
    </>
  );
}

export default PayPrice;
