import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const TitleCss = tw.h3`
  text-3xl
  font-bold
`;

function Title(props) {
  const { addclass } = props;

  return <TitleCss className={addclass}>{props.children}</TitleCss>;
}

export default Title;
