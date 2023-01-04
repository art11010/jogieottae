import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const InputCss = tw.input`
  w-full
  input
  border-gray-400
  focus:outline-none
`;

// defaultProps
Input.defaultProps = {
  type: 'text',
};
function Input(props) {
  const { id, label, type, placeholder, value } = props;
  return (
    <>
      <div className="mt-3">
        <label htmlFor={id}>{label}</label>
        <InputCss id={id} type={type} placeholder={placeholder} value={value} />
      </div>
    </>
  );
}

export default Input;
