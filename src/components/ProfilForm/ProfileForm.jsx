import Input from "../InputForm/InputForm";
import Button from "../Buttons/Button";
import * as S from "./profileForm.styled";

const ProfileForm = ({ person }) => {
  return (
    <S.AccountForm onSubmit={(event) => event.preventDefault()}>
      <S.Image>
        <div></div>
        <p>Заменить</p>
      </S.Image>
      <S.Data>
        <S.Inputs>
          <div>
            <S.Label htmlFor="name">Имя</S.Label>
            <Input
              placeholder={person.name}
              name="name"
              id="name"
              type="text"
              width="300px"
              placeholderColor="#000"
            />
          </div>

          <div>
            <S.Label htmlFor="surname">Фамилия</S.Label>
            <Input
              placeholder={person.surname}
              name="surname"
              type="text"
              id="surname"
              width="300px"
              placeholderColor="#000"
            />
          </div>

          <div>
            <S.Label htmlFor="city">Город</S.Label>
            <Input
              placeholder={person.city}
              name="city"
              type="text"
              id="city"
              width="300px"
              placeholderColor="#000"
            />
          </div>

          <div>
            <S.Label htmlFor="phone">Телефон</S.Label>
            <Input
              placeholder={person.phone}
              name="phone"
              type="text"
              id="phone"
              width="614px"
              placeholderColor="#000"
            />
          </div>
        </S.Inputs>
        <Button margin="30px 0  0 0">Сохранить</Button>
      </S.Data>
    </S.AccountForm>
  );
};

export default ProfileForm;
