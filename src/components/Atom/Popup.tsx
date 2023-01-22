import { ReactNode } from 'react';

interface Props {
  id?: string;
  children: ReactNode;
  addClass?: string;
}

function Popup(props: Props) {
  const { id = 'layer-popup', addClass } = props;

  return (
    <div id={id} className={'modal ' + addClass}>
      <div className="modal-box relative">{props.children}</div>
    </div>
  );
}

export default Popup;
