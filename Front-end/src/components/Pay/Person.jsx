import React from 'react';
import { Input } from '../Atom';

function Pay() {
  return (
    <div className="pt-5 pb-10 border-t border-gray-400">
      <Input id="name" label="이름" value="김말똥" />
      <Input id="phone" label="휴대폰 번호" tpye="number" value="01012341234" />
    </div>
  );
}

export default Pay;
