import React from 'react';
import { Link } from 'react-router-dom';

// defaultProps
Button.defaultProps = {
  label: '',
};

function Button(props) {
  const { to, addClass } = props;
  return (
    <Link to={to} className={'btn btn-primary ' + addClass}>
      {props.children}
    </Link>
  );
}

export default Button;
