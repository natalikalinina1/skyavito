import CardItem from './CardItem';
import * as S from './card.styled';

const Card = ({ card }) => {

  let content = card?.map((add) => {
    return (
      <CardItem
        key={add.id}
        add={add}
      />
    );
  });
  return <S.CardContainer>{content}</S.CardContainer>;
};
export default Card;