import styled from 'styled-components';

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.primaryBlue};
  width: 100%;
`;

export const Nav = styled.nav`
  height: 79px;
  max-width: 1220px;
  margin: 30px auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Main = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 20px;
`;
