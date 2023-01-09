import React from 'react';

// defaultProps
Button.defaultProps = {
  label: '',
};

function Button(props) {
  const { addclass } = props;
  return (
    <button className={'btn btn-primary ' + addclass}>{props.children}</button>
  );
}

export default Button;
