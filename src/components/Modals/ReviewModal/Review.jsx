import * as S from "./reviewsModal.styled";
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../../features/api/apiSlice'
import createdOn from '../../../components/Card/utils'


const Review = ({ review }) => {
  const users = useSelector((state) => state.card?.users)
  const user = users.filter((user) => user.id === review.author_id)
  const userAvatar = user[0]?.avatar
  ? `${BASE_URL}${user[0]?.avatar}`
  : '/img/no_picture.png'

  return (
    <S.ReviewContainer>
      <div>
        <S.Image src={userAvatar}/>
      </div>
      <S.ReviewDetails>
        <S.NameDate>
        <p>{user[0]?.name}</p>
        <span>
            {createdOn(review?.created_on)}
          </span>
        </S.NameDate>

        <S.ReviewContent>
          <p>Комментарий</p>
          <span>{review?.text}</span>
        </S.ReviewContent>
      </S.ReviewDetails>
    </S.ReviewContainer>
  );
};

export default Review;
