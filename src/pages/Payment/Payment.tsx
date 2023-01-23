import { Alink, Title, TitleSub, ShadowBox } from '../../components/Atom';

import PayPerson from '../../components/Payment/PayPerson';
import PayProduct from '../../components/Payment/PayProduct';
import PayPrice from '../../components/Payment/PayPrice';

import { useQuery } from '@tanstack/react-query';
import { getPayList } from '../../api/payment';

function Payment() {
  const { data: payList, isLoading: payLoading } = useQuery(
    ['payGet'],
    getPayList
  );
  if (payLoading) return 'Loading...';

  return (
    <div className="container">
      <Title>예약하기</Title>
      <div className="mt-10 grid grid-cols-2 gap-10 items-start">
        <ShadowBox>
          <TitleSub addClass="mb-2">예약자 정보</TitleSub>
          <PayPerson payList={payList} />
          <TitleSub addClass="mb-2">예약 정보</TitleSub>
          <PayProduct payList={payList} />
        </ShadowBox>
        <ShadowBox>
          <TitleSub addClass="mb-2">금액 정보</TitleSub>
          <PayPrice payList={payList} />
          <Alink to="/payment/complete" addClass="mt-5 btn-block">
            결제하기
          </Alink>
        </ShadowBox>
      </div>
    </div>
  );
}

export default Payment;
