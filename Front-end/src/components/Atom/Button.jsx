import React from 'react';

// defaultProps
Button.defaultProps = {
  label: '',
  type: 'text',
};

function Button(props) {
  const { addclass, text } = props;
  return <button className={'btn btn-primary ' + addclass}>{text}</button>;
}

export default Button;
