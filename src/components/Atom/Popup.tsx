import { ReactNode } from 'react';

interface Props {
  id?: string;
  children: ReactNode;
  addClass?: string;
}

function Popup(props: Props) {
  const { id = 'layer-popup', addClass } = props;

  return (
    <>
      <input type="checkbox" id={id} className={'modal-toggle ' + addClass} />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {props.children}
        </label>
      </label>
    </>
  );
}

export default Popup;
