import { Alink, Title, TitleSub, ShadowBox } from '../../components/Atom';

import PayPerson from '../../components/Payment/PayPerson';
import PayProduct from '../../components/Payment/PayProduct';
import PayPrice from '../../components/Payment/PayPrice';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function Payment() {
  const getCatList = async () => {
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
    data: paylist,
  } = useQuery(['cartGet'], getCatList, {
    staleTime: 5000 * 60 * 5,
  });
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurre ';

  return (
    <div className="container">
      <Title>예약하기</Title>
      <div className="mt-10 grid grid-cols-2 gap-10 items-start">
        <ShadowBox>
          <TitleSub addClass="mb-2">예약자 정보</TitleSub>
          <PayPerson />
          <TitleSub addClass="mb-2">예약 정보</TitleSub>
          <PayProduct paylist={paylist.leisureOrderItemList} />
        </ShadowBox>
        <ShadowBox>
          <TitleSub addClass="mb-2">금액 정보</TitleSub>
          <PayPrice
            paylist={paylist.leisureOrderItemList}
            totalPrice={paylist.totalPrice}
          />
          <Alink to="/payment/complete" addClass="mt-5 btn-block">
            결제하기
          </Alink>
        </ShadowBox>
      </div>
    </div>
  );
}

export default Payment;
