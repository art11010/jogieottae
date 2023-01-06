import React from 'react';

// defaultProps
function Input(props) {
  const { id, label, name, checked } = props;
  return (
    <>
      <div className="mt-3 flex">
        <input
          type="radio"
          name={name}
          className="radio radio-primary"
          checked={checked}
        />
        <label htmlFor={id} className="ml-3">
          {label}
        </label>
      </div>
    </>
  );
}

export default Input;
