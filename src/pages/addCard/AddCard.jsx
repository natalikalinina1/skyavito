import * as S from "./addCard.styled";
import Button from "../../components/Buttons/Button";
import ButtonWithPhone from "../../components/Buttons/ButtonWithPhone";
import Modal from "../../components/Modals/Modal/Modal";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Reviews from "../../components/Modals/RreviewModal/Review";
import UpdateModal from "../../components/Modals/AddUpdateModal/UpdateModal";
import { BASE_URL } from "../../features/api/apiSlice";
import { useGetReviewByIdQuery } from "../../features/reviews/reviewApiSlice";
import { getCurrentReview } from "../../features/reviews/reviewSlice";
import { getReviewsLength } from "./utils";

const AddCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const add = useSelector((state) => state.card?.currentAdd);
  const currentReviews = useSelector((state) => state.reviews?.currentReview);

  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isEditAddOpen, setIsEditAddOpen] = useState(false);

  const user = false;

  const {
    data: reviews,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetReviewByIdQuery(id);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getCurrentReview(reviews));
    }
  }, [dispatch, isSuccess, reviews]);

  let reviewsContent;

  if (isLoading) {
    reviewsContent = <p>Loading</p>;
  } else if (isSuccess) {
    reviewsContent = reviews;
  } else if (isError) {
    reviewsContent = <p>{error}</p>;
  }

  return (
    <>
      <Modal open={isReviewOpen} onClose={() => setIsReviewOpen(false)}>
        <Reviews reviews={reviewsContent} />
      </Modal>

      <Modal open={isEditAddOpen} onClose={() => setIsEditAddOpen(false)}>
        <UpdateModal />
      </Modal>

      <S.AddCardDetails>
        <S.AddImages>
          <S.MainImg></S.MainImg>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </S.AddImages>
        <S.AddDetails>
          <h1>{add?.title}</h1>
          <S.AddItemInfo>
            <S.Text>Сегодня в 10:45</S.Text>
            <S.Text>Санкт-Петербург</S.Text>
            <span onClick={() => setIsReviewOpen(true)}>
              {getReviewsLength(currentReviews?.length)}
            </span>
          </S.AddItemInfo>

          <h3>{`${add?.price} ₽`}</h3>

          {user ? (
            <>
              <Button
                margin={"0 10px 10px 0"}
                onClick={() => setIsEditAddOpen(true)}
              >
                Редактировать
              </Button>
              <Button>Снять с публикации</Button>
            </>
          ) : (
            <ButtonWithPhone phoneNumber={add?.user.phone}></ButtonWithPhone>
          )}

          <S.Seller>
            <S.SellerImg
              src={`${BASE_URL}${add?.user.avatar}`}
              alt="seller avatar"
            />
            <div>
              <S.SellerLink to={`/seller/${add?.user.id}`}>
                {add?.user.name}
              </S.SellerLink>
              <S.Text>{add?.created_on}</S.Text>
            </div>
          </S.Seller>
        </S.AddDetails>
      </S.AddCardDetails>

      <S.AddDescription>
        <h2>Описание товара</h2>
        <p>{add?.description}</p>
      </S.AddDescription>
    </>
  );
};

export default AddCard;
