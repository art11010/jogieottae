import React from 'react';

function ListPlace() {
  const ctgyArr = [
    { title: '제주도' },
    { title: '부산' },
    { title: '경주' },
    { title: '대전' },
  ];

  const ctgyMap = ctgyArr.map((lst, idx) => (
    <li key={lst.title + idx} className="text-center bg-gray-100 rounded-full">
      <button className="w-full py-5">
        <p>{lst.title}</p>
      </button>
    </li>
  ));

  return <>{ctgyMap}</>;
}

export default ListPlace;
