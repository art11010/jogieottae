import styled from 'styled-components';

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
