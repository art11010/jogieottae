import { axiosCustom } from './axiosCustom';

export const getPayList = async () => {
  try {
    const res = await axiosCustom.get(
      '/customer/leisure/cart/payment?customerId=1&customerName=안다'
    );
    const result = res.data.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
