import { axiosCustom } from './axiosCustom';

export const getCartList = async () => {
  try {
    const res = await axiosCustom.get('/customer/leisure/cart?customerId=1');
    const result = res.data.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

interface PostDto {
  productId: number;
  persons: number;
  startAt: string;
  endAt: string;
}
export const postCartList = async (postDto: PostDto) => {
  try {
    const res = await axiosCustom.post(
      '/customer/leisure/cart?customerId=1',
      postDto
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const delCartList = async (delDto: number) => {
  try {
    const res = await axiosCustom.delete(
      `/customer/leisure/cart?customerId=1&leisureOrderItemId=${delDto}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
