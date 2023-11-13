import * as S from "./card.styled";

const CardItem = ({ id }) => {
  const item = {
    name: "Ракетка для большого тенниса Triumph Pro ST...",
    price: "2 200 ₽",
    city: "Санкт Петербург",
    timeStamp: "Сегодня в 10:45",
  };
  return (
    <S.Card to={`/add/${id}`}>
      <S.Image></S.Image>
      <S.CardName title={item.name}>{item.name}</S.CardName>
      <S.CardPrice>{item.price}</S.CardPrice>
      <S.CardPlace>{item.city}</S.CardPlace>
      <S.CardPlace>{item.timeStamp}</S.CardPlace>
    </S.Card>
  );
};

export default CardItem;
