import React from 'react';
import { Link } from 'react-router-dom';

// defaultProps
Button.defaultProps = {
  label: '',
};

function Button(props) {
  const { to, addclass } = props;
  return (
    <Link to={to} className={'btn btn-primary ' + addclass}>
      {props.children}
    </Link>
  );
}

export default Button;
