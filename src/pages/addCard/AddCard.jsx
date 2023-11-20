import * as S from "./addCard.styled";
import Button from "../../components/Buttons/Button";
import ButtonWithPhone from "../../components/Buttons/ButtonWithPhone";
import Modal from "../../components/Modals/Modal/Modal";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../features/api/apiSlice";
import { useGetReviewByIdQuery } from "../../features/reviews/reviewApiSlice";
import { getReviews } from '../../features/reviews/reviewSlice'
import { getReviewsLength } from "./utils";
import createdOn from '../../components/Card/utils'
import { getModal, isModalOpen } from '../../features/modal/modalSlice'

const AddCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const add = useSelector((state) => state.card?.currentAdd);

  const currentReviews = useSelector((state) => state.reviews?.reviews)
  const isLoginOpen = useSelector((state) => state.modal.isOpen)
  const modalName = useSelector((state) => state.modal.modal)

  const user = useSelector((state) => state.auth?.user)
  const { data: reviews, isSuccess, isError, error } = useGetReviewByIdQuery(id)

  useEffect(() => {
    if (isSuccess) {
      dispatch(getReviews(reviews))
    } else if (isError) {
      console.log(error)
    }
  }, [dispatch, isSuccess, reviews, isError, error])

 
  return (
    <>
      {isLoginOpen && <Modal modal={modalName} />}

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
          <S.Text>{createdOn(add?.created_on)}</S.Text>
            <S.Text>{add?.user.city}</S.Text>
            <span
              onClick={() => {
                dispatch(isModalOpen(true))
                dispatch(getModal('reviews'))
              }}
            >
              {getReviewsLength(currentReviews?.length)}
            </span>
          </S.AddItemInfo>

          <h3>{`${add?.price} ₽`}</h3>

          {user ? (
            <>
              <Button
                margin={"0 10px 10px 0"}
                onClick={() => {
                  dispatch(isModalOpen(true))
                  dispatch(getModal('update-modal'))
                }}
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
              <S.Text>{`Продает товары с ${createdOn(add?.created_on)}`}</S.Text>
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
