import * as S from './addCard.styled';
import Button from '../../components/Buttons/Button';
import ButtonWithPhone from '../../components/Buttons/ButtonWithPhone';
import Modal from '../../components/Modals/Modal/Modal';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../features/api/apiSlice';
import { useGetReviewByIdQuery } from '../../features/reviews/reviewApi';
import { getReviews } from '../../features/reviews/reviewSlice';
import { getReviewsLength } from './utils';
import { getModal, isModalOpen } from '../../features/modal/modalSlice';
import { setCurrentAddImages } from '../../features/card/cardSlice';
import { useDeleteAddMutation } from '../../features/card/cardApi';
import createdOn from '../../components/Card/utils';

const AddCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCurrentUser, setIsCurrentUser] = useState(false); //используется для отслеживания, является ли текущий пользователь владельцем обьявления.
  const [deleteAdd] = useDeleteAddMutation(); //функция для удаления обьявления по идентификатору

  const add = useSelector((state) => state.card?.currentAdd);
  const addImages = useSelector((state) => state.card?.currentAddImages);
  const currentUserId = useSelector((state) => state?.users?.currentUser?.id);
  const currentReviews = useSelector((state) => state.reviews?.reviews);
  const isLoginOpen = useSelector((state) => state.modal.isOpen);
  const modalName = useSelector((state) => state.modal.modal);
  const date = new Date(add?.user?.sells_from).getFullYear();

  const handleDeleteAdd = async () => {
    //после удаления перенаправляет на страницу пользователя
    try {
      deleteAdd(id);
      navigate('/profile');
    } catch (err) {
      // eslint-disable-next-line no-undef
      console.log(err);
    }
  };

  useEffect(() => {
    //сравнение id обьявления с владельцем
    if (currentUserId && currentUserId === add.user_id) {
      setIsCurrentUser(true);
    }
  }, [currentUserId, add]);

  const {
    data: reviews,
    isSuccess,
    isError,
    error,
  } = useGetReviewByIdQuery(id); //хук для получения данных по id об отзывах

  useEffect(() => {
    //получение данных по отзывам
    if (isSuccess) {
      dispatch(getReviews(reviews));
    } else if (isError) {
      // eslint-disable-next-line no-undef
      console.log(error);
    }
  }, [dispatch, isSuccess, reviews, isError, error]);

  useEffect(() => {
    //Если объявление существует, создается новый массив изображений, привязанных к объявлению
    if (add) {
      const images = add.images.map((image) => {
        return {
          url: `${BASE_URL}${image.url}`,
          alt: add.title,
          id: image.id,
        };
      });
      dispatch(setCurrentAddImages(images));
    }
  }, [add, dispatch]);

  const displayImage = (images, index) => {
    //определяет порядок изображений
    const arr = [...images];
    const clickedImage = arr.splice(index, 1);
    arr.unshift(clickedImage[0]);

    dispatch(setCurrentAddImages(arr));
  };

  return (
    <>
      {isLoginOpen && <Modal modal={modalName} />}

      <S.AddCardDetails>
        <S.AddImages>
          {addImages?.length > 0 ? (
            addImages?.map((image, i) => {
              return (
                <img
                  src={image.url}
                  alt={image.title}
                  key={image.id}
                  onClick={() => displayImage(addImages, i)}
                />
              );
            })
          ) : (
            <img src="/img/no_picture.png" alt="" />
          )}
        </S.AddImages>
        <S.AddDetails>
          <h1>{add?.title}</h1>
          <S.AddItemInfo>
            <S.Text>{createdOn(add?.created_on)}</S.Text>
            <S.Text>{add?.user.city}</S.Text>
            <span
              onClick={() => {
                dispatch(isModalOpen(true));
                dispatch(getModal('reviews'));
              }}
            >
              {getReviewsLength(currentReviews?.length)}
            </span>
          </S.AddItemInfo>

          <h3>{`${add?.price} ₽`}</h3>

          {isCurrentUser ? (
            <>
              <Button
                margin={'0 10px 10px 0'}
                onClick={() => {
                  dispatch(getModal('update-modal'));
                  dispatch(isModalOpen(true));
                }}
              >
                Редактировать
              </Button>
              <Button onClick={() => handleDeleteAdd()}>
                Снять с публикации
              </Button>
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
              <S.Text>{`Продает товары с ${date}`}</S.Text>
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
