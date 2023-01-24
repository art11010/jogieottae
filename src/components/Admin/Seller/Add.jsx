import React, { useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { axiosCustom } from '../../../api/axiosCustom';
import { Button, TitleSub } from '../../Atom';
import SellerForm from '../SellerForm';

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
    [image, setImage] = useState(''),
    [lat, setLat] = useState(''),
    [lon, setLon] = useState('');

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
    setSellerAddConts(sellerAddConts);
    setSellerAddr(sellerAddr);
    setImage(image);
    setLat(lat);
    setLon(lon);
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

  const { mutate } = useMutation((postData) => {
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
        // console.log(response);
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
  });
  const addProduct = (e) => {
    e.preventDefault();

    let dataFlag = 1;
    const postDataKeys = Object.keys(postData);
    for (var i = 0; i < postDataKeys.length; i++) {
      if (postData[postDataKeys[i]].length <= 0) {
        dataFlag = 0;
      }
    }
    if (dataFlag) {
      getData(sellerAddConts, sellerAddr, image, lat, lon);
      mutate(postData);
    } else {
      alert('모든 입력창을 입력해주세요.');
    }
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
