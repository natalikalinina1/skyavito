import CardItem from "./CardItem";
import * as S from "./card.styled";

const Card = ( {count}) => {
  const content = Array.from({ length: count }).map((item, i) => (
    <CardItem key={i} id={i + 1}/>
  ));
  return <S.CardContainer>{content}</S.CardContainer>;
};

export default Card;
