import Review from "./Review";
import AddReview from "./AddReview";
import * as S from "./reviewsModal.styled";
import { useSelector } from 'react-redux'

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews?.reviews)
  const content = reviews?.map((review) => { 
    return <Review key={review.id} id={review.id} review={review} />
  })

  

  const user = useSelector((state) => state.auth?.user)
  return (
    <S.StyledReview>
      <S.Title>Отзывы о товаре</S.Title>
      {user && <AddReview />}

      {content}
      {content.length === 0 && <p>Пока отзывов нет</p>}
    </S.StyledReview>
  );
};

export default Reviews;
