import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  addClass?: string;
}

function PopupBtn(props: Props) {
  const { addClass } = props;
  return (
    <a href="#layer-popup" className={'btn btn-primary ' + addClass}>
      {props.children}
    </a>
  );
}

export default PopupBtn;
