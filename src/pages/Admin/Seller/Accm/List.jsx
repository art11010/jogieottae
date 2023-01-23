import React from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Table from '../../../../components/Admin/Table';
import PagiNation from '../../../../components/Atom/PagiNation';
import { getSellerProductList } from '../../../../api/seller';
import * as Kr from '../../../../components/Admin/TransKr.js';

function SellerList() {
  const { mainCate } = useOutletContext();
  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);

  const { data: productList, isLoading: productLoading } = useQuery(
    ['productList'],
    getSellerProductList
  );
  if (productLoading) return 'Loading...';

  const isEmpty = productList.data.empty;
  const tb = productList.data.content;
  const tbKeys = Object.keys(tb[0]);
  let headNameObj = new Object();
  for (var i = 0; i < tbKeys.length; i++) {
    headNameObj[tbKeys[i]] = Kr.tableKeyTransKR(tbKeys[i]);
  }

  return (
    <>
      {isEmpty ? (
        <>
          <p className="flex justify-center items-center h-full text-2xl text-main font-bold">
            등록된 {mainCate} 시설이 없습니다.
          </p>
        </>
      ) : (
        <>
          <Table
            cols={tbKeys.length}
            headNameObj={headNameObj}
            currentPath={loca.pathname}
            sellerId={pathParams.get('sellerId')}
          >
            {tb}
          </Table>
          <PagiNation
            atvPageNum={pathParams.get('page')}
            totalPageNum={productList.data.totalPages}
            currentPath={loca.pathname}
            sellerId={pathParams.get('sellerId')}
          />
        </>
      )}
    </>
  );
}

export default SellerList;
