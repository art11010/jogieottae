import React from 'react';
import { TitleSub } from './Atom';

// List
import BookInfo from './Pay/BookInfo';
import Person from './Pay/Person';
import Price from './Pay/Price';

function Pay(props) {
  const { text, type } = props;
  let PaytEl;

  if (type == 'bookinfo') PaytEl = <BookInfo />;
  else if (type == 'person') PaytEl = <Person />;
  else if (type == 'price') PaytEl = <Price />;

  return (
    <>
      <TitleSub addclass="mb-2" text={text} />
      {PaytEl}
    </>
  );
}

export default Pay;
