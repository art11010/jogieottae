// https://velog.io/@yiyb0603/React%EC%97%90%EC%84%9C-axios-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0

import axios, { AxiosInstance } from 'axios';
// import cookies from 'js-cookie';
const SERVER_ADDRESS = 'http://zogioddae.us-east-1.elasticbeanstalk.com';

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${SERVER_ADDRESS}`, // 기본 서버 주소 입력
  // headers: {
  //   access_token: cookies.get('access_token'),
  // },
});
