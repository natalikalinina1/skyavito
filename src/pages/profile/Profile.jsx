import ProfileForm from "../../components/ProfilForm/ProfileForm";
import Card from "../../components/Card/Card";
import * as S from "./profile.styled";
import { useGetCurrentUserQuery } from "../../features/users/usersApi";
import { setCurrentUser } from "../../features/users/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const userCard = false;

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users?.currentUser);

  const { data, isLoading, isSuccess, isError, error } =
    useGetCurrentUserQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(data));
    }
  }, [isSuccess, dispatch, data]);

  if (isError) {
  }
  return (
    <>
      <S.Title>Здравствуйте, {data?.name}</S.Title>
      <S.Heading>Настройки профиля</S.Heading>
      {user && <ProfileForm person={user} />}
      <S.Heading>Мои товары</S.Heading>
      {userCard ? (
        <Card count="4" />
      ) : (
        <S.Heading>Пока у вас нет обьявлений</S.Heading>
      )}
    </>
  );
};

export default Profile;
