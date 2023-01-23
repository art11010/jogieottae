import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { Button } from '../Atom';

function AddressBtn(props) {
  const { addClass, setSellerAddr, setlat, setlon } = props;

  const addrPopupOpen = useDaumPostcodePopup(
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
  );

  const AddressLoad = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    var geocoder = new daum.maps.services.Geocoder();
    geocoder.addressSearch(fullAddress, function (results, status) {
      if (status === daum.maps.services.Status.OK) {
        var result = results[0];
        var coords = new daum.maps.LatLng(result.y, result.x);
        props.setlat(coords.La);
        props.setlon(coords.Ma);
      }
    });
    props.setSellerAddr(fullAddress);
  };

  const AddressSettingClick = () => {
    addrPopupOpen({ onComplete: AddressLoad });
  };

  return (
    <>
      <Button type="button" onClick={AddressSettingClick} addClass={addClass}>
        주소 찾기
      </Button>
    </>
  );
}

export default AddressBtn;
