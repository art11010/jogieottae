import React from 'react';
import { Title, BorderBox } from '../../components/Atom';

import NoticeList from '../../components/Notice/NoticeList';

function Notice() {
  const noticelist = [
    {
      id: '김말똥',
      subject: '선착순~ 쿠폰~~',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere obcaecati, suscipit ducimus impedit fuga eveniet? Odit alias corporis tempore, modi, nam accusantium consequuntur iusto molestias similique eveniet minima natus.',
      endTime: '2023.01.16',
    },
    {
      id: '김말똥222',
      subject: '선착순~ 쿠폰~~2222',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere obcaecati, suscipit ducimus impedit fuga eveniet? Odit alias corporis tempore, modi, nam accusantium consequuntur iusto molestias similique eveniet minima natus.2222',
      endTime: '2023.01.16222',
    },
  ];

  return (
    <div className="container">
      <Title>공지사항</Title>
      <BorderBox addClass="mt-5">
        <NoticeList noticelist={noticelist} />
      </BorderBox>
    </div>
  );
}

export default Notice;
