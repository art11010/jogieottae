import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const InputCss = tw.input`
  p-3
  h-12
  w-full
  border
  border-gray-400
  rounded-xl
`;

// defaultProps
Input.defaultProps = {
  label: '',
  type: 'text',
};
function Input(props) {
  const { id, label, type, placeholder } = props;
  return (
    <>
      <div className="mt-3">
        <label htmlFor="id">{label}</label>
        <InputCss id={id} type={type} placeholder={placeholder} />
      </div>
    </>
  );
}

export default Input;
