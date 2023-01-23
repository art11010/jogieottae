import React from 'react';
import { Title } from '../../components/Atom';
import ListProduct from '../../components/List/ListProduct';

// assets
import roomImg from '../../assets/img_room.jpeg';

function WishList() {
  return (
    <>
      <Title>찜 목록</Title>
      <ListProduct />
    </>
  );
}

export default WishList;
