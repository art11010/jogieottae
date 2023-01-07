import React from 'react';

function Popup(props) {
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box relative">
        <a href="#" className="absolute top-5 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
        {props.children}
        <div className="modal-action">
          <a href="#" className="btn btn-primary">
            적용하기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
