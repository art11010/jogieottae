import React from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductView } from '../../api/product';
import ViewProduct from '../../components/Detail/ViewProduct';

function ProductView() {
  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);
  const pathName = useLocation().pathname;
  const mainCate = pathName.includes('accommodation') ? '숙박' : '레저';
  const mainPath = pathName.includes('accommodation')
    ? 'accommodation'
    : 'leisure';
  //  const { mainCate, mainPath } = useOutletContext();

  const { data: productView, isLoading: productLoading } = useQuery(
    ['productDetail', mainPath, pathParams.get('sellerId')],
    getProductView
  );
  if (productLoading)
    return <div className="container">해당 상품을 로딩 중입니다....</div>;
  const productInfo = productView.data;
  return <ViewProduct loadData={productInfo} />;
}

export default ProductView;
