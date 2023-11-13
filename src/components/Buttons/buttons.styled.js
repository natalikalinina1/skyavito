import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  background: ${({ theme }) => theme.colors.primaryBlue};
  border-radius: 6px;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`