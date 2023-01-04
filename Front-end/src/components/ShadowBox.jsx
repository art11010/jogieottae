import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const ShadowBoxEl = tw.div`
  p-10
  bg-white
  rounded-3xl
  shadow-default
`;

function ShadowBox(props) {
  const { addclass } = props;
  return <ShadowBoxEl className={addclass}>{props.children}</ShadowBoxEl>;
}

export default ShadowBox;
