// import axios from 'axios';
import { customAxios } from './customAxios';

// const api = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
// })

export const getSellerProductList = async () => {
  try {
    const res = await customAxios.get('/seller/leisure?sellerId=1&page=0');
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getSellerProductDetail = async () => {
  try {
    const res = await customAxios.get('/seller/leisure/detail?leisureId=1');
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// https://velog.io/@godud2604/React-Query-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
