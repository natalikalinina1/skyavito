import CardItem from "./CardItem";
import * as S from "./card.styled";

const Card = ({ card }) => {

  let content = card?.map((add) => {
    return (
      <CardItem
        key={add.id}
        id={add.id}
        name={add.title}
        price={add.price}
        city={add.user.city}
        time={add?.created_on}
        images={add.images}
        user={add.user}
      />
    )
  })
  return <S.CardContainer>{content}</S.CardContainer>
}
export default Card