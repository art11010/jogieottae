import { ReactNode } from 'react';

interface Props {
  id?: string;
  children: ReactNode;
  addClass?: string;
  onClick?: () => void;
}

function PopupBtn(props: Props) {
  const { id = 'layer-popup', addClass, onClick } = props;
  return (
    <label
      htmlFor={id}
      className={'btn btn-primary ' + addClass}
      onClick={onClick}
    >
      {props.children}
    </label>
  );
}

export default PopupBtn;
