import { axiosCustom } from './axiosCustom';

interface PostDto {
  customerId: number;
  leisureItemId: number;
  leisureId: string;
  price: string;
  tid: string;
}
export const postKakaopay = async (postDto: PostDto) => {
  try {
    const res = await axiosCustom.post(
      '/customer/leisure/payment/kakaopay',
      postDto
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
