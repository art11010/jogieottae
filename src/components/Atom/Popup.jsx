import React from 'react';

function Popup(props) {
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        {props.children}
        <div className="modal-action">
          <a href="#" className="btn">
            적용하기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
