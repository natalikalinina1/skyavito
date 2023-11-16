import * as S from "./reviewsModal.styled";

const review = {
  name: "Олег",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  date: "14 августа",
};

const Review = () => {
  return (
    <S.ReviewContainer>
      <div>
        <S.Image />
      </div>
      <S.ReviewDetails>
        <S.NameDate>
          <p>{review.name}</p>
          <span>{review.date}</span>
        </S.NameDate>

        <S.ReviewContent>
          <p>Комментарий</p>
          <span>{review.text}</span>
        </S.ReviewContent>
      </S.ReviewDetails>
    </S.ReviewContainer>
  );
};

export default Review;
