import Card from "../../components/Card/Card";
import ButtonWithPhone from "../../components/Buttons/ButtonWithPhone";
import * as S from "./Seller.styled";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";

const Seller = () => {
  const users = useSelector((state) => state.card?.users);
  const allCard = useSelector((state) => state.card?.allCard);

  const { id } = useParams();
  const seller = users?.filter((user) => Number(user.id) === Number(id))
  const sellerCard = allCard?.filter(
    (add) => Number(add.user_id) === Number(id)
  )
  const date = new Date(seller[0]?.sells_from).getFullYear()

  return (
    <>
      <S.Title>Профиль продавца</S.Title>
      <S.SellerInfo>
      <S.Image
          src={
            seller[0]?.avatar
              ? `${BASE_URL}${seller[0].avatar}`
              : '/img/no_picture.png'
          }
        />
         <S.SellerDetails>
          <S.SellerName>{`${seller[0]?.name} ${seller[0]?.surname}`}</S.SellerName>
          <S.SellerPlace>{seller[0]?.city}</S.SellerPlace>
          <S.SellerPlace>{`Продает товары с ${date}`}</S.SellerPlace>
          <ButtonWithPhone phoneNumber={seller[0]?.phone}></ButtonWithPhone>
          </S.SellerDetails>
      </S.SellerInfo>
<S.Heading>Товары продавца</S.Heading>
      <Card card={sellerCard} />
    </>
  )
}
export default Seller




