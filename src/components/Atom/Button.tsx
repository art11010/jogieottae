import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  addClass?: string;
  _onClick: () => void;
}

function Button(props: Props) {
  const { addClass, _onClick } = props;
  return (
    <button className={'btn btn-primary ' + addClass} onClick={_onClick}>
      {props.children}
    </button>
  );
}

export default Button;
