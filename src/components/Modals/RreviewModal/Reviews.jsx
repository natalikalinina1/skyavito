import Review from "./Review";
import AddReview from "./AddReview";
import * as S from "./reviewsModal.styled";

const Reviews = () => {
  const content = Array.from({ length: 5 }).map((item, i) => (
    <Review key={i} id={i + 1} />
  ));
  return (
    <S.StyledReview>
      <S.Title>Отзывы о товаре</S.Title>

      <AddReview />

      {content}
    </S.StyledReview>
  );
};

export default Reviews;
