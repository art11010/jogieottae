import React from 'react';

function PopupBtn(props) {
  const { addClass } = props;
  return (
    <a href="#layer-popup" className={'btn btn-primary ' + addClass}>
      {props.children}
    </a>
  );
}

export default PopupBtn;
