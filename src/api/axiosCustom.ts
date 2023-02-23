import axios, { AxiosInstance } from 'axios';
// import cookies from 'js-cookie';
const SERVER_ADDRESS = 'https://zogioddae.us-east-1.elasticbeanstalk.com';

export const axiosCustom: AxiosInstance = axios.create({
  baseURL: `${SERVER_ADDRESS}`, // 기본 서버 주소 입력
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
    // access_token: cookies.get('access_token'),
  },
});

// 블로그
// https://velog.io/@yiyb0603/React%EC%97%90%EC%84%9C-axios-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0
// https://velog.io/@godud2604/React-Query-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
// https://velog.io/@citron03/React-Query%EC%97%90%EC%84%9C-Post-useMutation-hook-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

// 임시 이미지
// https://a0.muscache.com/im/pictures/miso/Hosting-34846249/original/4fe9caaa-95b2-4113-b283-5fdfb0d9f2c0.jpeg?im_w=720
// https://a0.muscache.com/im/pictures/c247a915-5b81-4990-9406-77cc2c3838df.jpg?im_w=1200

// const requestPost = async (postDto) => {
//   const res = await axiosCustom.post('/write-post', postDto);
// }
