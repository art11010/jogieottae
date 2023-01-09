import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const TitleSubCss = tw.h4`
  text-2xl
  font-bold
`;

function TitleSub(props) {
  const { addclass, text } = props;

  return <TitleSubCss className={addclass}>{props.children}</TitleSubCss>;
}

export default TitleSub;
