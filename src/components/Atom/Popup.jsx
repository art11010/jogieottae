import React from 'react';

// defaultProps
Popup.defaultProps = {
  closeBtn: false,
};

function Popup(props) {
  const { addClass, closeBtn } = props;

  return (
    <div className={'modal ' + addClass} id="layer-popup">
      <div className="modal-box relative">
        {closeBtn && (
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
        )}
        {props.children}
      </div>
    </div>
  );
}

export default Popup;
