import ProfileForm from "../../components/ProfilForm/ProfileForm";
import Card from "../../components/Card/Card";
import * as S from "./profile.styled";

const person = {
  name: "Антон",
  surname: "Городецкий",
  city: "Санкт-Петербург",
  phone: 89161234567,
};
const userCards = true

const Profile = () => {
  return (
    <>
      <S.Title>Здравствуйте, {person.name}!</S.Title>
      <S.Heading>Настройки профиля</S.Heading>
      <ProfileForm person={person} />
      <S.Heading>Мои товары</S.Heading>
      {userCards ? (
        <Card count="4" />
      ) : (
        <S.Heading>Пока ваших объявлений нет</S.Heading>
      )}
    </>
  );
};

export default Profile;
