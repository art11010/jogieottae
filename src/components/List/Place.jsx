import React from 'react';

function Place() {
  const placeArr = [
    { title: '제주도' },
    { title: '부산' },
    { title: '경주' },
    { title: '대전' },
  ];

  const placeMap = placeArr.map((lst, idx) => (
    <li key={lst.title + idx}>
      <button className="w-full py-5 btn-secondary rounded-full">
        {lst.title}
      </button>
    </li>
  ));

  return <ul className="mt-2 grid grid-cols-4 gap-4">{placeMap}</ul>;
}
export default Place;
