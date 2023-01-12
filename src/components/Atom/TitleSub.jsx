import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const TitleSubCss = tw.h3`
  text-2xl
  font-bold
`;

function TitleSub(props) {
  const { addClass } = props;

  return <TitleSubCss className={addClass}>{props.children}</TitleSubCss>;
}

export default TitleSub;
