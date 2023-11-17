import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 26px;
  row-gap: 40px;
  margin: 43px auto;
  cursor: pointer;
`

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 270px;
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const Image = styled.div`
  height: 270px;
  width: 270px;
  object-fit: cover;
  background-color: lightgrey;
  margin: 0 0 20px 0;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
  }
`

export const CardName = styled.p`
  font-size: 22px;
  line-height: 120%;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primaryBlue};
  margin: 0 0 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardPrice = styled.p`
  font-size: 22px;
  line-height: 150%;
  margin: 0 0 10px 0;
  color:  ${({ theme }) => theme.colors.black};
`

export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 4px 0;
`