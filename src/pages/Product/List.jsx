import React from 'react';

import { Title } from '../../components/Atom';
import SelectProduct from '../../components/Main/SelectProduct';
import ListProduct from '../../components/List/ListProduct';
import ProductMap from '../../components/Atom/Map';

function ProductList() {
  return (
    <div className="container">
      <SelectProduct addClass="w-4/5 m-auto" />
      <div className="grid grid-cols-2 mt-20 gap-x-5">
        <Title addClass="mb-5 col-span-2">지금 갈 수 있는 곳</Title>
        <ListProduct />
        <ProductMap list="https://29da5bf8-9078-4627-aab5-82e2ea49e288.mock.pstmn.io/accm/product" />
      </div>
    </div>
  );
}

export default ProductList;
