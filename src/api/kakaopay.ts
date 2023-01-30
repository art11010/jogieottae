import { axiosCustom } from './axiosCustom';

interface PostDto {
  customerId: number;
  cartId: number;
  productId: number;
  price: number;
  tid: null;
}
export const postKakaopay = async (postDto: PostDto) => {
  try {
    const res = await axiosCustom.post(
      '/customer/leisure/payment/kakaopay',
      postDto
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
