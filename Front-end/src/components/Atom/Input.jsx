import React from 'react';

// style
import styled from 'styled-components';
export const InputCss = styled.input`
  width: 100%;
  border: 1px solid #999;
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
      <label htmlFor="id" className="">
        {label}
      </label>
      <InputCss id={id} type="text" placeholder={placeholder} className="" />
    </>
  );
}

export default Input;
