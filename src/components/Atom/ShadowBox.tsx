import { ReactNode } from 'react';

// style
import tw from 'tailwind-styled-components';
export const ShadowBoxEl = tw.div`
  p-10
  bg-white
  rounded-3xl
  shadow-default
`;

interface Props {
  children: ReactNode;
  addClass?: string;
}

function ShadowBox(props: Props) {
  const { addClass } = props;
  return <ShadowBoxEl className={addClass}>{props.children}</ShadowBoxEl>;
}

export default ShadowBox;
