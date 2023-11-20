import Button from "../../Buttons/Button";
import TextArea from "../../InputForm/TextArea";
import * as S from "./reviewsModal.styled";

const AddReview = () => {
  return (
    <S.AddReviewContainer>
      <label htmlFor="review">Добавить отзыв</label>
      <TextArea placeholder={"Введите отзыв"} name="review" id="review" />

      <Button width="181px">Опубликовать</Button>
    </S.AddReviewContainer>
  );
};

export default AddReview;
