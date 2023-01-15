import React from 'react';

// defaultProps
function Radio(props) {
  const { id, name, checked } = props;

  return (
    <>
      <div className="mt-3 flex">
        <input
          id={id}
          type="radio"
          name={name}
          className="radio radio-primary"
          checked={checked}
        />
        <label htmlFor={id} className="ml-3">
          {props.children}
        </label>
      </div>
    </>
  );
}

export default Radio;
