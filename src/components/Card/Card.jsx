import CardItem from "./CardItem";
import * as S from "./card.styled";
import { useGetAllCardQuery } from '../../features/card/cardApi'

const Card = ( {count}) => {
  const {
    data: card,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllCardQuery()

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = card.map((add) => {
      
      return (
        <CardItem
          key={add.id}
          id={add.id}
          name={add.title}
          price={add.price}
          city={add.user.city}
          time={add.created_on}
          images={add.images}
        />
      )
    })
  } else if (isError) {
    content = { error }
  }
  return <S.CardContainer>{content}</S.CardContainer>;
};

export default Card;
