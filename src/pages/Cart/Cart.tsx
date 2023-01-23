import { Alink, Title, TitleSub, ShadowBox } from '../../components/Atom';

import PayProduct from '../../components/Payment/PayProduct';
import PayPrice from '../../components/Payment/PayPrice';

import { useQuery } from '@tanstack/react-query';
import { getCartList } from '../../api/payment';

function Cart() {
  const { data: payList, isLoading: payLoading } = useQuery(
    ['cartGet'],
    getCartList
  );
  if (payLoading) return 'Loading...';

  return (
    <div className="container">
      <Title>장바구니</Title>
      <div className="mt-10 grid grid-cols-2 gap-10 items-start">
        <ShadowBox>
          <TitleSub addClass="mb-2">예약 정보</TitleSub>
          <PayProduct payList={payList} cart />
        </ShadowBox>
        <ShadowBox>
          <TitleSub addClass="mb-2">금액 정보</TitleSub>
          <PayPrice payList={payList} cart />
          <Alink to="/payment" addClass="mt-5 btn-block">
            예약하기
          </Alink>
        </ShadowBox>
      </div>
    </div>
  );
}

export default Cart;
