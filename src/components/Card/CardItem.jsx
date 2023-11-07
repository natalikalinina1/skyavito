import * as S from "./card.styled";

const CardItem = () => {
  return (
    <S.Card>
      <S.Image></S.Image>
      <S.CardLink to="/card">
        Ракетка для большого тенниса Triumph Pro ST...
      </S.CardLink>
      <S.CardPrice>2 200 ₽</S.CardPrice>
      <S.CardPlace>Санкт Петербург</S.CardPlace>
      <S.CardPlace>Сегодня в 10:45</S.CardPlace>
    </S.Card>
  );
};

export default CardItem;
