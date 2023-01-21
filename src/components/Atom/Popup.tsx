import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  addClass?: string;
}

function Popup(props: Props) {
  const { addClass } = props;

  return (
    <div className={'modal ' + addClass} id="layer-popup">
      <div className="modal-box relative">{props.children}</div>
    </div>
  );
}

export default Popup;
