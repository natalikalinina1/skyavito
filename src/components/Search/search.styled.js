import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
`

export const LogoDiv = styled.div`
  margin-right: 80px;
`

export const Input = styled.div`
  width: 100%;
  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    &:focus {
      outline: 2px solid #009ee4;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`