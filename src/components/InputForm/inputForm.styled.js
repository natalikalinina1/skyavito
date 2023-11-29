import styled from 'styled-components'

export const StyledInput = styled.input`
  width: ${({ width }) => width};
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.lighterBlack}`};
  border-radius: 6px;
  padding: 13px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  
  &:focus {
    outline: ${({ theme }) => `1px solid ${theme.colors.primaryBlue}`};
  }
  &::placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor ? placeholderColor : 'rgba(0, 0, 0, 0.3)'};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export const StyledTextArea = styled.textarea`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.lighterBlack}`};
  border-radius: 6px;
  padding: 13px 20px;
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  &:focus {
    outline: ${({ theme }) => `1px solid ${theme.colors.primaryBlue}`};
  }
  &::placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor ? placeholderColor : 'rgba(0, 0, 0, 0.3)'};
  }
`