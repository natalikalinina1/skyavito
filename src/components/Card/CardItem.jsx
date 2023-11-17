import * as S from "./card.styled";
import { BASE_URL } from '../../features/api/apiSlice'
import createdOn from './utils'

const CardItem = ({ id, name, price, city, time, images }) => {
  const imgUrl = `${BASE_URL}${images[0]?.url}`
  return (
    <S.Card to={`/add/${id}`}>
      <S.Image>
        <img
          src={imgUrl.slice(-3) === 'png' ? imgUrl : '/img/no_picture.png'}
          alt={name}
        />
      </S.Image>
      <S.CardName title={name}>{name}</S.CardName>
      <S.CardPrice>{`${price} ₽`}</S.CardPrice>
      <S.CardPlace>{city}</S.CardPlace>
      <S.CardPlace>{createdOn(time)}</S.CardPlace>
    </S.Card>
  );
};

export default CardItem;
