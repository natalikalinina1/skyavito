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

  const sellerInfo = users.filter((user) => id === user.id);

  console.log(users.map((user) => console.log(user.id)));
  console.log(id);

  const sellerCard = allCard.filter((add) => add.user.id === sellerInfo.id);
  return (
    <>
      <S.Title>Профиль продавца</S.Title>
      <S.SellerInfo>
        <S.SellerImage
          src={
            sellerInfo.avatar
              ? `${BASE_URL}${sellerInfo.avatar}`
              : "/img/no_picture.png"
          }
        />
        <S.SellerDetails>
          <S.SellerName>{`${sellerInfo.name} ${sellerInfo.surname}`}</S.SellerName>
          <S.SellerPlace>{sellerInfo.city}</S.SellerPlace>
          <S.SellerPlace>{`Продает товары с ${sellerInfo.sells_from}`}</S.SellerPlace>
          <ButtonWithPhone phoneNumber={sellerInfo.phone}></ButtonWithPhone>
        </S.SellerDetails>
      </S.SellerInfo>
      <S.Heading>Товары продавца</S.Heading>
      <Card card={sellerCard} />
    </>
  );
};

export default Seller;
