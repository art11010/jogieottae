import React from 'react';

function Popup(props) {
  const { addClass } = props;

  return (
    <div className={'modal ' + addClass} id="layer-popup">
      <div className="modal-box relative">{props.children}</div>
    </div>
  );
}

export default Popup;
