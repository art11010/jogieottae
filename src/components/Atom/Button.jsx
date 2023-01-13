import React from 'react';

// defaultProps
Button.defaultProps = {
  _onClick: () => {},
};

function Button(props) {
  const { addClass, _onClick } = props;
  return (
    <button className={'btn btn-primary ' + addClass} onClick={_onClick}>
      {props.children}
    </button>
  );
}

export default Button;
