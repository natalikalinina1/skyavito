import styled from 'styled-components'

export const StyledInput = styled.input`
  width: ${({ width }) => width};
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  &:focus {
    outline: 1px solid #009ee4;
  }
  &::placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor ? placeholderColor : 'rgba(0, 0, 0, 0.3)'};
  }
`