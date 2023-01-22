import { Alink, Title, TitleSub, ShadowBox } from '../../components/Atom';

import PayProduct from '../../components/Payment/PayProduct';
import PayPrice from '../../components/Payment/PayPrice';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function Cart() {
  const getCartList = async () => {
    try {
      const res = await axios.get('/data/cartGet.json');
      const result = res.data.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    isLoading,
    error,
    data: payList,
  } = useQuery(['cartGet'], getCartList);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurre ';

  return (
    <div className="container">
      <Title>장바구니</Title>
      <div className="mt-10 grid grid-cols-2 gap-10 items-start">
        <ShadowBox>
          <TitleSub addClass="mb-2">예약 정보</TitleSub>
          <PayProduct payList={payList.leisureOrderItemList} cart={true} />
        </ShadowBox>
        <ShadowBox>
          <TitleSub addClass="mb-2">금액 정보</TitleSub>
          <PayPrice
            payList={payList.leisureOrderItemList}
            totalPrice={payList.totalPrice}
            cart
          />
          <Alink to="/payment" addClass="mt-5 btn-block">
            예약하기
          </Alink>
        </ShadowBox>
      </div>
    </div>
  );
}

export default Cart;
