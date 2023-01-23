interface Props {
  id: string;
  label: string;
  addClass?: string;
  name?: string;
  ref?: string;
  onChange?: () => void;
}

function FileInput(props: Props) {
  const { id, label, name, ref, onChange } = props;
  let { addClass = '' } = props;

  if (addClass) {
    addClass = ' ' + addClass;
  }
  return (
    <div className={'form-control mt-3' + addClass}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        type="file"
        name={name}
        className="file-input file-input-bordered w-full border-gray-400"
        ref={ref}
        onChange={onChange}
      />
    </div>
  );
}

export default FileInput;
