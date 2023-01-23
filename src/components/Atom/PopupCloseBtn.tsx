import { IconX } from '../Atom';

interface Props {
  id: string;
  addClass?: string;
}

function PopupCloseBtn(props: Props) {
  const { id = 'layer-popup', addClass } = props;
  return (
    <label htmlFor={id} className={'btn btn-circle btn-ghost ' + addClass}>
      <IconX />
    </label>
  );
}

export default PopupCloseBtn;
