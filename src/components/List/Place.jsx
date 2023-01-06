import React from 'react';

function Place() {
  const ctgyArr = [
    { title: '제주도' },
    { title: '부산' },
    { title: '경주' },
    { title: '대전' },
  ];

  const ctgyMap = ctgyArr.map((lst, idx) => (
    <li key={lst.title + idx}>
      <button className="w-full py-5 btn-secondary rounded-full">
        {lst.title}
      </button>
    </li>
  ));

  return <>{ctgyMap}</>;
}
export default Place;
