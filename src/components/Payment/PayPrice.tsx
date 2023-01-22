interface Props {
  payList: [
    {
      salePrice: number;
    }
  ];
  totalPrice: number;
  cart?: boolean;
}

function PayPrice(props: Props) {
  const { payList, totalPrice, cart } = props;

  let totalSalePrice = payList.reduce((acc, item) => {
    return acc + item.salePrice;
  }, 0);

  return (
    <>
      <div className="py-5 px-2 border-t border-gray-400">
        <p className="flex justify-between">
          총 선택 상품 <strong className="text-lg">{payList.length}건</strong>
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
              <>{totalPrice + totalSalePrice}원</>
            ) : (
              <>
                <span className="line-through mr-2 font-normal text-base">
                  {totalPrice + totalSalePrice}원
                </span>
                {totalPrice}원
              </>
            )}
          </strong>
        </p>
      </div>
    </>
  );
}

export default PayPrice;
