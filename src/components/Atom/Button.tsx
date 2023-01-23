import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  addClass?: string;
  onClick: () => void;
  onSubmit: () => void;
}

function Button(props: Props) {
  const { addClass, type = 'button', onClick, onSubmit } = props;
  return (
    <button
      type={type}
      className={'btn btn-primary ' + addClass}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {props.children}
    </button>
  );
}

export default Button;
