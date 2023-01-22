// https://velog.io/@godud2604/React-Query-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0

import axios from 'axios';
import { customAxios } from './customAxios';

// const requestPost = async (postDto) => {
//   const res = await customAxios.post('/write-post', postDto);
// }

export const getCartList = async () => {
  try {
    const res = await customAxios.get('/customer/leisure/cart?customerId=1');
    const result = res.data.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const getCouponList = async () => {
  try {
    const res = await axios.get('/data/couponGet.json');
    const result = res.data.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
