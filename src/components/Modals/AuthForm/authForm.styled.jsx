import styled from 'styled-components';

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 44px 45px;
  max-width: 366px;
  input {
    margin: 30px 0 0 0;
  }
  p {
    color: salmon;
  }

`;
export const LogoContainer = styled.div``;

export const Logo = styled.img`
  width: 140px;
  height: 21px;
`;

export const PreloaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
`;

export const LoadingMessage = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

