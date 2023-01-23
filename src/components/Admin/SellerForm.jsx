import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Input, FileInput } from '../Atom';
import AddressBtn from '../Atom/Address';

function SellerForm(props) {
  const { addClass, getData, loadData } = props;
  const { mainCate } = useOutletContext();

  const [sellerAddConts, setSellerAddConts] = useState({
    name: !loadData ? '' : loadData.name,
    price: !loadData ? '' : loadData.price,
    description: !loadData ? '' : loadData.description,
    checkInTime: !loadData ? '' : loadData.checkInTime,
    checKOutTime: !loadData ? '' : loadData.checKOutTime,
    minPerson: !loadData ? '' : loadData.minPerson,
    maxPerson: !loadData ? '' : loadData.maxPerson,
    pictureUrl: !loadData ? '' : loadData.pictureUrl,
  });

  const [sellerAddr, setSellerAddr] = useState(!loadData ? '' : loadData.addr),
    [lat, setlat] = useState(!loadData ? '' : loadData.lat),
    [lon, setlon] = useState(!loadData ? '' : loadData.lon);

  // console.log(setSellerAddr);
  // console.log(sellerAddr);
  const valueChange = (e) => {
    setSellerAddConts({
      ...sellerAddConts,
      [e.target.name]: e.target.value,
    });

    // setSellerAddr({ sellerAddr, [e.target.text]: e.target.value });
    setSellerAddr(sellerAddr);
    setlat(lat);
    setlon(lon);
    getData({ sellerAddConts }, { sellerAddr }, { lat }, { lon });
  };

  return (
    <>
      <div className={addClass}>
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
        <FileInput
          id="image"
          label={`${!loadData ? '이미지 등록' : loadData.pictureUrl}`}
          onChange={valueChange}
        />
        {props.children}
      </div>
    </>
  );
}

export default SellerForm;
