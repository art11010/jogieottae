import { axiosCustom } from './axiosCustom';

export const getCouponList = async () => {
  try {
    const res = await axiosCustom.get('/customer/leisure/coupon?customerId=1');
    const result = res.data.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
