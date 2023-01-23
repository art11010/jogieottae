import { customAxios } from './customAxios';

export const getSellerProductList = async ({ queryKey }) => {
  const [_, mainPath, sellerId] = queryKey;
  try {
    const res = await customAxios.get(
      `/seller/${mainPath}?sellerId=${sellerId}&page=0`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getSellerProductDetail = async ({ queryKey }) => {
  const [_, mainPath, id] = queryKey;
  try {
    const res = await customAxios.get(
      `/seller/${mainPath}/detail?${mainPath}Id=${id}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
