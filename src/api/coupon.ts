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

interface PutDto {
  itemIdDto: number;
  couponDto: number;
}
export const putCouponList = async (putDto: PutDto) => {
  try {
    const res = await axiosCustom.put(
      `customer/leisure/cart/coupon?customerId=1&leisureOrderItemId=${putDto.itemIdDto}&couponGroupId=${putDto.couponDto}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const delCouponList = async (delDto: number) => {
  try {
    const res = await axiosCustom.delete(
      `/customer/leisure/cart/coupon?leisureOrderItemId=${delDto}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
