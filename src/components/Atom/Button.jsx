import React from 'react';

function Button(props) {
  const { addClass } = props;
  return (
    <button className={'btn btn-primary ' + addClass}>{props.children}</button>
  );
}

export default Button;
