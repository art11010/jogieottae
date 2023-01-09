import styled from 'styled-components';
import tw from 'twin.macro';

export const multipleLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  font-size: 24px;
  &::before,
  &::after{
    content: '';
    display: block;
    width: calc(50% - 32px);
    height: 1px;
    background-color: #ccc;
  }
`;

export const loginLink = styled.span`
  a{
    color: #999;
    &:hover{
      ${tw`
        text-main
      `}
    }
  }
  &::after{
    content: '|';
    display: inline-block;
    margin: 0 10px;
    color: #999;
    font-size: 14px;
    font-weight: 300;
  }
  &:last-child::after{display:none;}
`;

export const titleDesc = styled.p`
  ${tw`
    flex
    items-center
    justify-center
  `}
`;
