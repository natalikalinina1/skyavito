import React from 'react';
import ProfileForm from '../../components/ProfilForm/ProfileForm';
import Card from '../../components/Card/Card';
import * as S from './profile.styled';
import { useGetCurrentUserQuery } from '../../features/users/usersApi';
import { setCurrentUser } from '../../features/users/usersSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCurrentUserCardQuery } from '../../features/card/cardApi';
import { setUserCard } from '../../features/card/cardSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users?.currentUser);
  const userCardFromState = useSelector((state) => state.card?.userCard);
 
  const { data, isSuccess, isError, error } = useGetCurrentUserQuery();

  const {
    data: userCard,
    isSuccess: isUserCardSuccess,
    isError: isUserCardError,
    error: userCardError,
  } = useGetCurrentUserCardQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(data));
    }
  }, [isSuccess, dispatch, data]);
  useEffect(() => {
    if (isUserCardSuccess) {
      dispatch(setUserCard(userCard));
    } else if (isUserCardError) {
      // eslint-disable-next-line no-undef
      console.log(userCardError);
    }
  }, [isUserCardSuccess, dispatch, userCard, isUserCardError, userCardError]);

  if (isError) {
    // eslint-disable-next-line no-undef
    console.log(error);
  }
  return (
    <>
      <S.Title>Здравствуйте, {data?.name}</S.Title>
      <S.Heading>Настройки профиля</S.Heading>
      {user && <ProfileForm isSuccess={isSuccess} avatarImg={user.avatar} />}
      <S.Heading>Мои товары</S.Heading>
      {userCardFromState ? (
        <Card card={userCardFromState} />
      ) : (
        <S.Heading>Пока у вас нет обьявлений</S.Heading>
      )}
    </>
  );
};

export default Profile;
