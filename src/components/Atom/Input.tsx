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
  type?: string;
  placeholder?: string;
  value: string;
  readonly?: boolean;
  addClass?: string;
  _onChange?: () => void;
}

function Input(props: Props) {
  const {
    id,
    label,
    type = 'text',
    placeholder,
    value,
    readonly,
    _onChange,
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
          placeholder={placeholder}
          value={value}
          readOnly={readonly}
          onChange={_onChange}
        />
      </div>
    </>
  );
}

export default Input;
