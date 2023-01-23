import React, { useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { axiosCustom } from '../../../../api/axiosCustom';
import { Button, TitleSub } from '../../../../components/Atom';
import SellerForm from '../../../../components/Admin/SellerForm';
import { getSellerProductDetail } from '../../../../api/seller';

function SellerDetail() {
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

  const { data: productDetail, isLoading: productLoading } = useQuery(
    ['productDetail', mainPath, pathParams.get(`${mainPath}Id`)],
    getSellerProductDetail
  );

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
      .put(
        `/seller/${mainPath}?sellerId=${pathParams.get(
          'sellerId'
        )}&${mainPath}Id=${pathParams.get(`${mainPath}Id`)}`,
        postData,
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert('수정이 완료되었습니다.');
        navigate(
          `/admin/seller/${mainPath}?sellerId=${pathParams.get(
            'sellerId'
          )}&page=1`
        );
      })
      .catch((error) => {
        alert(`수정에 실패했습니다. 에러 코드 : ${error}`);
      });
  });

  if (productLoading) return 'Loading...';

  const editProduct = (e) => {
    e.preventDefault();
    mutate(postData);
  };

  const delProduct = () => {
    axiosCustom
      .delete(
        `/seller/${mainPath}?sellerId=${pathParams.get(
          'sellerId'
        )}&${mainPath}Id=${pathParams.get(`${mainPath}Id`)}`
      )
      .then((response) => {
        console.log(response);
        if (window.confirm('정말로 삭제하시겠습니까?')) {
          alert('삭제가 완료되었습니다.');
          navigate(
            `/admin/seller/${mainPath}?sellerId=${pathParams.get(
              'sellerId'
            )}&page=1`
          );
        }
      })
      .catch((error) => {
        alert(`삭제에 실패했습니다. 에러 코드 : ${error}`);
      });
  };

  return (
    <>
      <TitleSub>{mainCate}시설 자세히 보기</TitleSub>
      <SellerForm loadData={productDetail.data} getData={getData}>
        <div className="flex justify-center items-center mt-6 gap-2">
          <Link
            to={`/admin/seller/${mainPath}?sellerId=${pathParams.get(
              'sellerId'
            )}&page=0`}
            className="btn btn-secondary border border-black w-1/5"
          >
            목록으로 돌아가기
          </Link>
          <Button type="submit" addClass="w-1/5" onClick={editProduct}>
            정보 변경
          </Button>
          <Button type="submit" addClass="w-1/5" onClick={delProduct}>
            삭제하기
          </Button>
        </div>
      </SellerForm>
    </>
  );
}

export default SellerDetail;
