import React, { useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { Button, Input } from '../../../../components/Atom';
import AddressBtn from '../../../../components/Atom/Address';

function SellerAccmAdd() {
  const navigate = useNavigate();
  const { mainCate } = useOutletContext();
  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);

  const [sellerAddConts, setSellerAddConts] = useState({
    name: '',
    price: '',
    addrDetail: '',
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
    addrDetail,
    description,
    checkInTime,
    checKOutTime,
    minPerson,
    maxPerson,
    image,
  } = sellerAddConts;

  const valueChange = (e) => {
    setSellerAddConts({ ...sellerAddConts, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();

    // POST
    axios
      .post(
        'https://jsonplaceholder.typicode.com/users',
        {
          accommodationName: name,
          addr: sellerAddr + ' ' + addrDetail,
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
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert('등록이 완료되었습니다.');
        navigate(
          `/admin/seller/accm?sellerId=${pathParams.get('sellerId')}&page=1`
        );
      })
      .catch((error) => {
        alert(`등록에 실패했습니다. 에러 코드 : ${error}`);
      });
  };

  return (
    <>
      <form
        onSubmit={sendData}
        method="post"
        className="flex flex-col justify-center w-2/3"
      >
        <Input
          id="name"
          label={`${mainCate}명`}
          name="name"
          placeholder={`${mainCate}의 이름을 적어주세요.`}
          onChange={valueChange}
          value={sellerAddConts.name}
        />
        <Input
          type="number"
          label="가격"
          id="price"
          name="price"
          placeholder={`${mainCate}의 가격을 적어주세요.`}
          onChange={valueChange}
          value={sellerAddConts.price}
        />
        <div className="flex justify-center items-end">
          <Input
            id="addr"
            label="주소"
            name="addr"
            placeholder="주소"
            onChange={valueChange}
            value={sellerAddr}
          />
          <AddressBtn
            addClass="mt-3 grow ml-3"
            setSellerAddr={setSellerAddr}
            setlat={setlat}
            setlon={setlon}
          />
        </div>
        <Input
          id="addrDetail"
          label="상세 주소"
          name="addrDetail"
          placeholder="상세 주소"
          onChange={valueChange}
          value={sellerAddConts.addrDetail}
        />
        <Input
          id="description"
          label={`${mainCate}설명`}
          name="description"
          placeholder={`${mainCate} 설명을 적어주세요.`}
          onChange={valueChange}
          value={sellerAddConts.description}
        />
        <Input
          type="number"
          id="checkInTime"
          label="체크인 시간"
          name="checkInTime"
          placeholder="체크인 시간을 적어주세요."
          onChange={valueChange}
          value={sellerAddConts.checkInTime}
        />
        <Input
          type="number"
          id="checKOutTime"
          label="체크아웃 시간"
          name="checKOutTime"
          placeholder="체크아웃 시간을 적어주세요."
          onChange={valueChange}
          value={sellerAddConts.checKOutTime}
        />
        <Input
          type="number"
          id="minPerson"
          label="최소 인원"
          name="minPerson"
          placeholder="최소 인원을 적어주세요."
          onChange={valueChange}
          value={sellerAddConts.minPerson}
        />
        <Input
          type="number"
          id="maxPerson"
          label="최대 인원"
          name="maxPerson"
          placeholder="최대 인원을 적어주세요."
          onChange={valueChange}
          value={sellerAddConts.maxPerson}
        />
        <Input
          type="file"
          id="image"
          label="이미지 등록"
          name="image"
          placeholder="이미지 등록"
          onChange={valueChange}
          value={sellerAddConts.image}
        />
        <Button addClass="w-1/3 m-auto mt-3">등록하기</Button>
      </form>
    </>
  );
}

export default SellerAccmAdd;
