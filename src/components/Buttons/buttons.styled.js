import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  background: #009ee4;
  border-radius: 6px;
  border: 1px solid #ffffff;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  color: #ffffff;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`