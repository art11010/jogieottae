// https://velog.io/@godud2604/React-Query-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0

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
export const getPayList = async () => {
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
    const res = await customAxios.get('/customer/leisure/coupon?customerId=1');
    const result = res.data.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

// https://a0.muscache.com/im/pictures/miso/Hosting-34846249/original/4fe9caaa-95b2-4113-b283-5fdfb0d9f2c0.jpeg?im_w=720
// https://a0.muscache.com/im/pictures/c247a915-5b81-4990-9406-77cc2c3838df.jpg?im_w=1200
