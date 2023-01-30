import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { kakao } = window;
function ProductMap(props) {
  const { list } = props;
  const [markers, setMarkers] = useState([]);

  const load = async () => {
    try {
      const res = await axios.get(list);
      const result = res.data.data;

      if (result.name == undefined) {
        setMarkers(result);
      } else {
        setMarkers([result]);
      }
      return mapFn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    load();
  }, []);

  function mapFn() {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커를 표시할 위치와 title 객체 배열입니다
    const positions = markers.map((m, i) => {
      let markerObj = new Object();
      markerObj.title = m.name;
      markerObj.latlng = new kakao.maps.LatLng(m.lon, m.lat);
      return markerObj;
    });
    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        // image: markerImage, // 마커 이미지
      });
    }

    var latlng = positions.map((e) => e.latlng);
    var bounds = new kakao.maps.LatLngBounds();
    for (let i = 0; i < latlng.length; i++) {
      marker.setMap(map);
      bounds.extend(latlng[i]);
    }

    map.setBounds(bounds);
    map.relayout();
  }
  return <div id="map" className="w-full h-500"></div>;
}

export default ProductMap;
