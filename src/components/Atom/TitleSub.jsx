import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const TitleSubCss = tw.h4`
  text-2xl
  font-bold
`;

// defaultProps
TitleSub.defaultProps = {
  text: '제목을 입력해주세요',
};

function TitleSub(props) {
  const { addclass, text } = props;

  return <TitleSubCss className={addclass}>{text}</TitleSubCss>;
}

export default TitleSub;
