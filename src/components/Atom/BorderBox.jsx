import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const BorderBoxEl = tw.div`
  p-10
  bg-white
  rounded-3xl
  border
  border-gray-400
`;

function BorderBox(props) {
  const { addClass } = props;
  return <BorderBoxEl className={addClass}>{props.children}</BorderBoxEl>;
}

export default BorderBox;
