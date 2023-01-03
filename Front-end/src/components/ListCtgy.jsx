import React from 'react';

// assets
import ctgy from '../assets/category.png';

// style
import tw from 'tailwind-styled-components';
export const UlCss = tw.ul`
  mt-2
  grid
  grid-cols-4
  gap-4
`;

function CtgyList() {
  const ctgyArr = [
    { title: '모텔', imgSrc: ctgy },
    { title: '호텔', imgSrc: ctgy },
    { title: '놀거리', imgSrc: ctgy },
    { title: '펜션 / 풀빌라', imgSrc: ctgy },
  ];
  const ctgyMap = ctgyArr.map((lst, idx) => (
    <li key={idx} className="text-center bg-gray-100 rounded-xl">
      <button className="py-5">
        <img src={lst.imgSrc} alt="" className="m-auto w-1/2" />
        <p className="mt-2">{lst.title}</p>
      </button>
    </li>
  ));
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold">카테고리</h3>
      <UlCss>{ctgyMap}</UlCss>
    </div>
  );
}

export default CtgyList;
