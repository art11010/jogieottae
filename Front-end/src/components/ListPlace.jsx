import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const UlCss = tw.ul`
  mt-2
  grid
  grid-cols-4
  gap-4
`;

function ListPlace() {
  const ctgyArr = [
    { title: '제주도' },
    { title: '부산' },
    { title: '경주' },
    { title: '대전' },
  ];
  const ctgyMap = ctgyArr.map((lst, idx) => (
    <li key={idx} className="py-5 text-center bg-gray-100 rounded-full">
      <button>
        <p className="">{lst.title}</p>
      </button>
    </li>
  ));
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold">국내 인기 여행지</h3>
      <UlCss>{ctgyMap}</UlCss>
    </div>
  );
}

export default ListPlace;
