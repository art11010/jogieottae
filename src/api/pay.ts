// api.ts

import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
// })

export const getCartList = async () => {
  try {
    const res = await axios.get('/data/cartGet.json');
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

// https://velog.io/@godud2604/React-Query-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
