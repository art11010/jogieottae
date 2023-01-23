import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Button, TitleSub } from '../../../../components/Atom';
import SellerForm from '../../../../components/Admin/SellerForm';
import { getSellerProductDetail } from '../../../../api/seller';
import { useQuery } from '@tanstack/react-query';

function SellerDetail() {
  const { mainCate, mainPath } = useOutletContext();

  const [sellerAddDatasss, setSellerAddDatasss] = useState({
    name: '',
    price: '',
    description: '',
    checkInTime: '',
    checKOutTime: '',
    minPerson: '',
    maxPerson: '',
    image: '',
  });

  const [asellerAddr, setAsellerAddr] = useState(''),
    [alat, setalat] = useState(''),
    [alon, setalon] = useState('');

  const {
    name,
    price,
    description,
    checkInTime,
    checKOutTime,
    minPerson,
    maxPerson,
    image,
  } = sellerAddDatasss;

  const { data: productDetail, isLoading: productLoading } = useQuery(
    ['productDetail'],
    getSellerProductDetail
  );
  if (productLoading) return 'Loading...';

  const getData = (sellerAddConts, sellerAddr, lat, lon) => {
    setSellerAddDatasss(sellerAddConts);
    // setAsellerAddr(sellerAddr);
    // setalat(lat);
    // setalon(lon);
  };

  const server = 'https://jsonplaceholder.typicode.com/users';
  const editProduct = (e) => {
    console.log('editProduct');
    e.preventDefault();

    // PUT
    axios
      .put(
        server,
        // `${server}/seller/${mainPath}?sellerId=${pathParams.get('sellerId')}`,
        // `${server}/seller/leisure?sellerId=${pathParams.get('sellerId')}`,
        {
          name: name,
          addr: asellerAddr,
          price: price,
          pictureUrl: image,
          description: description,
          checkInTime: checkInTime,
          checKOutTime: checKOutTime,
          minPerson: minPerson,
          maxPerson: maxPerson,
          lat: alat,
          lon: alon,
        },
        {
          withCredentials: true,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert('등록이 완료되었습니다.');
        navigate(
          `/admin/seller/${mainPath}?sellerId=${pathParams.get(
            'sellerId'
          )}&page=1`
        );
      })
      .catch((error) => {
        alert(`등록에 실패했습니다. 에러 코드 : ${error}`);
      });
  };

  const delProduct = () => {
    console.log('delProduct');
  };

  return (
    <>
      <TitleSub>{mainCate}시설 자세히 보기</TitleSub>
      <SellerForm loadData={productDetail.data} getData={getData}>
        <div className="flex justify-center items-center mt-6 gap-2">
          <Button type="submit" addClass="w-1/3" onClick={editProduct}>
            정보 변경
          </Button>
          <Button type="submit" addClass="w-1/3" onClick={delProduct}>
            삭제하기
          </Button>
        </div>
      </SellerForm>
    </>
  );
}

export default SellerDetail;
