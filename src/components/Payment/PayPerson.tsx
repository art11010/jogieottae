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
      <Input id="phone" label="이메일" value="gmail@gmail.com" readonly />
    </div>
  );
}

export default PayPerson;
