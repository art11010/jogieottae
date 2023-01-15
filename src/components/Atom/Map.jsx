import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { kakao } = window;
function ProductMap(props){
  const { list } = props;
  const [ markers, setMarkers ] = useState([]);
  useEffect(() => {
      async function fetchData() {
          const res = await axios.get(list);
          const result = res.data;
          setMarkers(result.data);
          mapFn();
      }
      fetchData();
  }, []);

  function mapFn(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(0, 0), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커를 표시할 위치와 title 객체 배열입니다
    let positions = markers.map((e, i) => {
        let listObj = new Object();
        listObj.title = e.accommodationName;
        listObj.latlng = new kakao.maps.LatLng(e.lat, e.lon);
        return listObj;
    });

    // 마커 이미지
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    for (var i = 0; i < positions.length; i ++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지
        });
    }
    var latlng = positions.map((e) => e.latlng);
    var bounds = new kakao.maps.LatLngBounds();
    var i, marker;
    for (i = 0; i < latlng.length; i++) {
        marker = new kakao.maps.Marker({ position : latlng[i] });
        marker.setMap(map);
        bounds.extend(latlng[i]);
    }
    map.setBounds(bounds);
  }
  return (
    <div id="map" className="w-full h-500"></div>
  );
}


export default ProductMap;
