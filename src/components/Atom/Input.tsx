// style
import tw from 'tailwind-styled-components';
export const InputCss = tw.input`
  w-full
  input
  border-gray-400
  focus:outline-none
`;

interface Props {
  id: string;
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value: string;
  readonly?: boolean;
  disabled?: boolean;
  addClass?: string;
  onChange?: () => void;
}

function Input(props: Props) {
  const {
    id,
    label,
    name,
    type = 'text',
    placeholder,
    value,
    readonly,
    disabled,
    onChange,
  } = props;
  let { addClass = '' } = props;

  if (addClass) {
    addClass = ' ' + addClass;
  }
  return (
    <>
      <div className={'mt-3' + addClass}>
        <label htmlFor={id}>{label}</label>
        <InputCss
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={value}
          readOnly={readonly}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Input;
