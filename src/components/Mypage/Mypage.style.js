import styled from 'styled-components';
import tw from 'twin.macro';

export const reviewTextArea = styled.textarea`
  height:300px;
  padding:20px;
  box-sizing:border-box;
  ${tw`
    w-full
    border
    border-gray-400
    resize-none
  `}
`;