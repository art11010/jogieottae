import React from 'react';
import { getProductView } from '../../api/product';
import { useQuery } from '@tanstack/react-query';
import ViewProduct from '../../components/Detail/ViewProduct';

function ProductView() {
  const { data: productView, isLoading: productLoading } = useQuery(
    ['productDetail'],
    getProductView
  );
  if (productLoading)
    return <div className="container">해당 상품을 로딩 중입니다....</div>;
  const productInfo = productView.data;
  return <ViewProduct loadData={productInfo} />;
}

export default ProductView;
