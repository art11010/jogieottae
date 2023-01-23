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

export const postCartList = async () => {
  try {
    const res = await axiosCustom.post('/customer/leisure/cart?customerId=1', {
      leisureId: 2,
      persons: 2,
      startAt: '2023-05-30T16:00',
      endAt: '2023-06-09T20:00',
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
