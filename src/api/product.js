import axios from 'axios';
// import { axiosCustom } from './axiosCustom';

export const getProductView = async ({ queryKey }) => {
  const [_, mainPath, sellerId] = queryKey;
  try {
    const res = await axios.get(
      // `/customer/${mainPath}/detail?productId=1`
      `/data/productView.json`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
