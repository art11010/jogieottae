import { Input } from '../Atom';

function PayPerson() {
  return (
    <div className="pt-5 pb-10 border-t border-gray-400">
      <Input id="name" label="이름" value="김말똥" readonly />
      <Input
        id="phone"
        label="휴대폰 번호"
        type="number"
        value="01012341234"
        readonly
      />
    </div>
  );
}

export default PayPerson;
