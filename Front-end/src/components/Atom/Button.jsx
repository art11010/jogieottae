import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const ButtonCss = tw.button`
  block
  mt-3
  p-3
  h-12
  w-full
  text-white
  bg-main-middle
  rounded-xl
`;

// defaultProps
Button.defaultProps = {
  label: '',
  type: 'text',
};

function Button(props) {
  const { text } = props;
  return <ButtonCss>{text}</ButtonCss>;
}

export default Button;
