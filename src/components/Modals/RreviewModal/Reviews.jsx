import Review from "./Review";
import AddReview from "./AddReview";
import * as S from "./reviewsModal.styled";

const Reviews = ({ reviews }) => {
  const content = reviews.map((review) => {
    return <Review key={review.id} id={review.id} review={review} />
  })

  

  const user = false
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
