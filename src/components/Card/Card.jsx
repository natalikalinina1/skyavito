import CardItem from "./CardItem";
import * as S from "./card.styled";

const Card = ( {count}) => {
  const content = Array.from({ length: count }).map((item, i) => (
    <CardItem key={i} />
  ));
  return <S.CardContainer>{content}</S.CardContainer>;
};

export default Card;
