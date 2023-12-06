import * as S from './card.styled';
import { BASE_URL } from '../../features/api/apiSlice';
import createdOn from './utils';
import { useDispatch } from 'react-redux';
import { getCurrentAdd } from '../../features/card/cardSlice';

const CardItem = ({ add }) => {
  const dispatch = useDispatch();

  const imgUrl = `${BASE_URL}${add.images[0]?.url}`;
  return (
    <S.Card to={`/add/${add.id}`} onClick={() => dispatch(getCurrentAdd(add))}>
      <S.Image>
        <img
          src={add.images?.length !== 0 ? imgUrl : '/img/no_picture.png'}
          alt={add.title}
        />
      </S.Image>
      <S.CardName>{add.title}</S.CardName>
      <S.CardPrice>{`${add.price} ₽`}</S.CardPrice>
      <S.CardPlace>{add.user.city}</S.CardPlace>
      <S.CardPlace>{createdOn(add.created_on)}</S.CardPlace>
    </S.Card>
  );
};

export default CardItem;
