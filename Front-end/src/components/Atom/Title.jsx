import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const TitleCss = tw.h3`
  text-3xl
  font-bold
`;

// defaultProps
Title.defaultProps = {
  text: '제목을 입력해주세요',
};

function Title(props) {
  const { addclass, text } = props;

  return <TitleCss className={addclass}>{text}</TitleCss>;
}

export default Title;
