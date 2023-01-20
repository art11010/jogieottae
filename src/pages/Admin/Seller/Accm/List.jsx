import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Table from '../../../../components/Admin/Table';
import PagiNation from '../../../../components/Atom/PagiNation';

function SellerAccmList(){
  const getData = async () => {
    try {
      const res = await axios.get('/data/sellerAccmList.json');
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };


  const {
    data: accmListData,
    isLoading
  } = useQuery(
    ['accmListData'],
    getData,
    { staleTime: 1000 }
  );

  if (isLoading) return 'Loading…';

  let tb = accmListData.data.content;

  // 테이블 헤더에 들어갈 한글버전
  const tableKeyTransKR = () => {
    let tableKey = Object.keys(tb[0]);
    let tbKeyKRver = new Object();

    tableKey.forEach((k, i) => {
      let value = '';
      switch(k){
        case 'id': value = '고유번호'; break;
        case 'accomodationName': value = '이름'; break;
        case 'addr': value = '주소'; break;
        case 'price': value = '가격'; break;
      }
      tbKeyKRver[k] = value;
    });
    return tbKeyKRver;
  }

  let cols = Object.keys(tableKeyTransKR()).length;
  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);
  let activePageNum = pathParams.get('page');

  return (
    <>
      <Table cols={cols} headNameObj={tableKeyTransKR()}>
        { tb }
      </Table>
      <PagiNation atvPageNum={activePageNum}
                  totalPages={accmListData.data.totalPages}
                  currentPage={loca.pathname}
                  sellerId={tb[0].sellerId} />
    </>
  );
}

export default SellerAccmList;
