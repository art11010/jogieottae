import React, { useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { Button, TitleSub } from '../../../../components/Atom';
import SellerForm from '../../../../components/Admin/SellerForm';

function SellerAdd() {
  const { mainCate, mainPath } = useOutletContext();
  const navigate = useNavigate();

  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);

  const [sellerAddData, setSellerAddData] = useState({
    name: '',
    price: '',
    description: '',
    checkInTime: '',
    checKOutTime: '',
    minPerson: '',
    maxPerson: '',
    image: '',
  });

  const [sellerAddr, setSellerAddr] = useState(''),
    [lat, setlat] = useState(''),
    [lon, setlon] = useState('');

  const {
    name,
    price,
    description,
    checkInTime,
    checKOutTime,
    minPerson,
    maxPerson,
    image,
  } = sellerAddData;

  const getData = (sellerAddConts, sellerAddr, lat, lon) => {
    setSellerAddData(sellerAddConts);
    setSellerAddr(sellerAddr);
    setlat(lat);
    setlon(lon);
  };

  const server = 'https://jsonplaceholder.typicode.com/users';
  const addProduct = (e) => {
    e.preventDefault();

    // POST
    axios
      .post(
        server,
        // `${server}/seller/${mainPath}?sellerId=${pathParams.get('sellerId')}`,
        // `${server}/seller/leisure?sellerId=${pathParams.get('sellerId')}`,
        {
          name: name,
          addr: sellerAddr,
          price: price,
          pictureUrl: image,
          description: description,
          checkInTime: checkInTime,
          checKOutTime: checKOutTime,
          minPerson: minPerson,
          maxPerson: maxPerson,
          lat: lat,
          lon: lon,
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

  return (
    <>
      <TitleSub>{mainCate}시설 등록하기</TitleSub>
      <SellerForm
        addClass="flex flex-col justify-center w-2/3"
        getData={getData}
      >
        <Button type="submit" addClass="w-1/3 m-auto mt-3" onClick={addProduct}>
          등록하기
        </Button>
      </SellerForm>
    </>
  );
}

export default SellerAdd;
