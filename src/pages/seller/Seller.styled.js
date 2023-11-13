import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 40px;
  line-height: 220%;
  margin-bottom: 10px;
  margin: 43px auto;
`

export const Heading = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 20px 0;
`

export const SellerInfo = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 44px;
`

export const SellerImage = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: lightgrey;
`

export const SellerDetails = styled.div`
  button {
    margin-top: 30px;
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

export const SellerName = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 200%;
  margin: 0 0 5px 0;
`

export const SellerPlace = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: ${({ theme }) => theme.colors.graniteGray};
  margin: 0 0 4px 0;
`