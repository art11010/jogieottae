import React from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Table from '../../../../components/Admin/Table';
import PagiNation from '../../../../components/Atom/PagiNation';
import * as Kr from '../../../../components/Admin/TransKr.js';

function SellerList() {
  const { mainCate } = useOutletContext();
  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);

  const getData = async () => {
    try {
      const res = await axios.get('/data/sellerAccmList.json');
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data: accmListData, isLoading } = useQuery(
    ['accmListData'],
    getData,
    { staleTime: 1000 }
  );
  if (isLoading) return 'Loading…';

  const isEmpty = accmListData.data.empty;
  const tb = accmListData.data.content;
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
            totalPageNum={accmListData.data.totalPages}
            currentPath={loca.pathname}
            sellerId={pathParams.get('sellerId')}
          />
        </>
      )}
    </>
  );
}

export default SellerList;
