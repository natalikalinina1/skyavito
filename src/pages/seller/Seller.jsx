import Card from '../../components/Card/Card'
import Button from '../../components/Buttons/Button'
import * as S from './Seller.styled';

const Seller = () => {
  const seller = {
    sellerName: 'Кирилл Матвеев',
    city: 'Санкт-Петербург',
    sellerOnSiteSince: 'Продает товары с августа 2021',
    phone: '8 909xxxxxxx',
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
          <Button hoverColor="#0080C1" padding={'10px 37px'}>
            <p> Показать телефон </p>
            <span>8 905 ХХХ ХХ ХХ</span>
          </Button>
        </S.SellerDetails>
      </S.SellerInfo>
      <S.Heading>Товары продавца</S.Heading>
      <Card count="4" />
    </>
  )
}

export default Seller