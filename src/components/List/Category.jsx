import React from 'react';

// assets
import ctgyIco from '../../assets/ico_home.png';

function Category() {
  const ctgyArr = [
    { title: '모텔', imgSrc: ctgyIco },
    { title: '호텔', imgSrc: ctgyIco },
    { title: '놀거리', imgSrc: ctgyIco },
    { title: '펜션 / 풀빌라', imgSrc: ctgyIco },
  ];

  const ctgyMap = ctgyArr.map((lst, idx) => (
    <li key={lst.title + idx}>
      <button className="py-5 btn-secondary rounded-xl">
        <img src={lst.imgSrc} alt="" className="m-auto w-1/2" />
        <p className="mt-2">{lst.title}</p>
      </button>
    </li>
  ));

  return <>{ctgyMap}</>;
}

export default Category;
