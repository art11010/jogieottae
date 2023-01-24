import {
  Alink,
  Title,
  TitleSub,
  ShadowBox,
  Button,
} from '../../components/Atom';

import PayProduct from '../../components/Payment/PayProduct';
import PayPrice from '../../components/Payment/PayPrice';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCartList, postCartList } from '../../api/cart';

function Cart() {
  const client = useQueryClient();
  const { mutate: cartaddList, isLoading: cartaddLoading } = useMutation(
    postCartList,
    {
      onSuccess: () => {
        client.invalidateQueries(['cartGet']);
      },
    }
  );

  const { data: payList, isLoading: payLoading } = useQuery(
    ['cartGet'],
    getCartList
  );

  if (payLoading) return 'Loading...';
  if (cartaddLoading) return 'Loading...';

  return (
    <div className="container">
      <Title>장바구니</Title>
      <Button
        onClick={() => {
          cartaddList({
            productId: 2,
            persons: 3,
            startAt: '2023-05-30T16:00',
            endAt: '2023-06-09T20:00',
          });
        }}
      >
        나중을 위한 장바구니 추가 버튼
      </Button>
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
