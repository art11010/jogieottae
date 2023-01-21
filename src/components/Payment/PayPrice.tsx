interface Props {
  paylist: [
    {
      salePrice: number;
    }
  ];
  totalPrice: number;
}

function PayPrice(props: Props) {
  const { paylist, totalPrice } = props;

  let totalSalePrice = paylist.reduce((acc, item) => {
    return acc + item.salePrice;
  }, 0);

  return (
    <>
      <div className="py-5 px-2 border-t border-gray-400">
        <p className="flex justify-between">
          총 선택 상품 <strong className="text-lg">{paylist.length}건</strong>
        </p>
        <p className="flex justify-between">
          총 결제 금액{' '}
          <strong className="text-lg">
            {totalSalePrice !== 0 && (
              <>
                <span className="line-through mr-2 font-normal text-base">
                  {totalPrice + totalSalePrice}원
                </span>
              </>
            )}
            {totalPrice}원
          </strong>
        </p>
      </div>
    </>
  );
}

export default PayPrice;
