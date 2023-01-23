import { Input } from '../Atom';

interface Props {
  payList: {
    customerName: string;
  };
}

function PayPerson(props: Props) {
  const { payList } = props;
  return (
    <div className="pt-5 pb-10 border-t border-gray-400">
      <Input id="name" label="이름" value={payList.customerName} readonly />
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
