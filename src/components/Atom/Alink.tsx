import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  to: string;
  addClass?: string;
}

function Alink(props: Props) {
  const { to, addClass } = props;
  return (
    <Link to={to} className={'btn btn-primary ' + addClass}>
      {props.children}
    </Link>
  );
}

export default Alink;
