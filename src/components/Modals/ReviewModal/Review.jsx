import * as S from "./reviewsModal.styled";
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../../features/api/apiSlice'

const Review = ({ review }) => {
  const users = useSelector((state) => state.adds?.users)
  const user = users.filter((user) => user.id === review.author_id)
  return (
    <S.ReviewContainer>
      <div>
        <S.Image src={`${BASE_URL}${user[0].avatar}`}  />
      </div>
      <S.ReviewDetails>
        <S.NameDate>
          <p>{user[0].name}</p>
          <span>{review.created_on}</span>
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
