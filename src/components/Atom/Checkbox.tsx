interface Props {
  checked: boolean;
}

function Checkbox(props: Props) {
  const { checked } = props;
  return (
    <label className="block mr-3">
      <input
        type="checkbox"
        className="checkbox checkbox-primary"
        checked={checked}
      />
    </label>
  );
}

export default Checkbox;
