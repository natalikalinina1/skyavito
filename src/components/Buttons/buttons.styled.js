import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  background: ${({ theme }) => theme.colors.primaryBlue};
  border-radius: 6px;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  padding: 13px 37px;
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
  }
`

export const StyledButtonHeader = styled(StyledButton)`
  padding: 8px 24px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerWhite};
  }
`

export const StyledButtonWithPhone = styled(StyledButton)`
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    max-width: 241px;
    margin: 0 0 4px 0;
  }
`
export const ButtonSignUp = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.lightSilver}`};
  width: 278px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightSilver};
    color: ${({ theme }) => theme.colors.white};
  }
`