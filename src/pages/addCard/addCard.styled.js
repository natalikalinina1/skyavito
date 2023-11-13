import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AddCardDetails = styled.div`
  margin-bottom: 60px;
  display: flex;
  gap: 60px;
`

export const AddImages = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    gap: 10px;

    div {
      background: lightgrey;
      width: 88px;
      height: 88px;
      cursor: pointer;
    }
  }
`

export const MainImg = styled.div`
  width: 100%;
  height: 480px;
  background: lightgrey;
  cursor: pointer;
`

export const AddDetails = styled.div`
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 140%;
    color:  ${({ theme }) => theme.colors.black};
    max-width: 621px;

    margin: 0 0 10px 0;
  }

  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 140%;
    color:  ${({ theme }) => theme.colors.black};
    margin: 0 0 20px 0;
  }

  button {
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
      max-width: 241px;

      margin: 0 0 4px 0;
    }
  }
`

export const AddItemInfo = styled.div`
  margin: 0 0 34px 0;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.graniteGray};
  margin: 0 0 4px 0;
`

export const Seller = styled.div`
  margin: 34px 0 0 0;

  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const SellerLink = styled(Link)`
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  color:  ${({ theme }) => theme.colors.primaryBlue};
`

export const SellerImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background: lightgrey;
`

export const AddDescription = styled.div`
  h2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 220%;
    color:${({ theme }) => theme.colors.black};
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.black};

    max-width: 792px;
  }
`
