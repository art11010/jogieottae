import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  addClass?: string;
  onClick: () => void;
}

function Button(props: Props) {
  const { addClass, onClick } = props;
  return (
    <button className={'btn btn-primary ' + addClass} onClick={onClick}>
      {props.children}
    </button>
  );
}

export default Button;
