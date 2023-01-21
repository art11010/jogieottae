import { ReactNode } from 'react';

// style
import tw from 'tailwind-styled-components';
export const TitleCss = tw.h2`
  text-3xl
  font-bold
`;

interface Props {
  children: ReactNode;
  addClass?: string;
}

function Title(props: Props) {
  const { addClass } = props;

  return <TitleCss className={addClass}>{props.children}</TitleCss>;
}

export default Title;
