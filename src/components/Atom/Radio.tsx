import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id: string;
  name: string;
  value?: string | number;
  checked?: boolean;
  onChange?: (e: any) => void;
}

// defaultProps
function Radio(props: Props) {
  const { id, name, value, checked, onChange } = props;

  return (
    <>
      <div className="mt-3 flex">
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          className="radio radio-primary"
          defaultChecked={checked}
          onChange={onChange}
        />
        <label htmlFor={id} className="ml-3">
          {props.children}
        </label>
      </div>
    </>
  );
}

export default Radio;
