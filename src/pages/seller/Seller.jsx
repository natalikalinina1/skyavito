import Card from '../../components/Card/Card'
import ButtonWithPhone  from '../../components/Buttons/ButtonWithPhone'
import * as S from './Seller.styled';

const Seller = () => {
  const seller = {
    sellerName: 'Кирилл Матвеев',
    city: 'Санкт-Петербург',
    sellerOnSiteSince: 'Продает товары с августа 2021',
    phone: '89600125523',
  }
  return (
    <>
      <S.Title>Профиль продавца</S.Title>
      <S.SellerInfo>
        <S.SellerImage></S.SellerImage>
        <S.SellerDetails>
          <S.SellerName>{seller.sellerName}</S.SellerName>
          <S.SellerPlace>{seller.city}</S.SellerPlace>
          <S.SellerPlace>{seller.sellerOnSiteSince}</S.SellerPlace>   
          <ButtonWithPhone phoneNumber={seller.phone}></ButtonWithPhone>
        </S.SellerDetails>
      </S.SellerInfo>
      <S.Heading>Товары продавца</S.Heading>
      <Card count="4" />
    </>
  )
}

export default Seller