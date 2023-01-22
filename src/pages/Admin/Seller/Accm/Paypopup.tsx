import {
  TitleSub,
  BorderBox,
  Radio,
  Popup,
  CloseBtn,
} from '../../../../components/Atom';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function PayPopup() {
  const getCouponList = async () => {
    try {
      const res = await axios.get('/data/cartGet.json');
      const result = res.data.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const {
    isLoading: couponLoading,
    error: couponError,
    data: couponList,
  } = useQuery<number>(['cartGet'], getCouponList);
  if (couponLoading) return 'Loading…';
  if (couponError) return 'An error has occurre ';
  console.log(couponList);

  return <div>안냥</div>;
}
export default PayPopup;
