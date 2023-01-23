import { ReactNode } from 'react';

interface Props {
  id?: string;
  children: ReactNode;
  addClass?: string;
}

function PopupBtn(props: Props) {
  const { id = 'layer-popup', addClass } = props;
  return (
    <label htmlFor={id} className={'btn btn-primary ' + addClass}>
      {props.children}
    </label>
  );
}

export default PopupBtn;
