import React, { useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { axiosCustom } from '../../../../api/axiosCustom';
import { Button, TitleSub } from '../../../../components/Atom';
import SellerForm from '../../../../components/Admin/SellerForm';

function SellerAdd() {
  const { mainCate, mainPath } = useOutletContext();
  const navigate = useNavigate();

  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);

  const [sellerAddConts, setSellerAddConts] = useState({
    name: '',
    price: '',
    description: '',
    checkInTime: '',
    checKOutTime: '',
    minPerson: '',
    maxPerson: '',
  });

  const [sellerAddr, setSellerAddr] = useState(''),
    [image, setimage] = useState(''),
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
  } = sellerAddConts;

  const getData = (sellerAddConts, sellerAddr, image, lat, lon) => {
    setSellerAddConts(sellerAddConts.sellerAddConts);
    setSellerAddr(sellerAddr.sellerAddr);
    setimage(image.image);
    setlat(lat.lat);
    setlon(lon.lon);

    console.log(sellerAddConts.sellerAddConts);
    console.log(sellerAddr.sellerAddr);
    console.log(image.image);
    console.log(lat.lat);
    console.log(lon.lon);
  };

  const postData = {
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
  };

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    (postData) => {
      axiosCustom
        .post(
          `/seller/${mainPath}?sellerId=${pathParams.get('sellerId')}`,
          postData,
          {
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
    },
    {
      onSuccess: () => {
        console.log(' 성공했나 ?');
        console.log(mutate, isLoading, isError, error, isSuccess);
      },
    }
  );
  const addProduct = (e) => {
    e.preventDefault();
    mutate(postData);
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
