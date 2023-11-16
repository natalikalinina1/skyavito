import Input from "../../InputForm/InputForm";
import Button from "../../Buttons/Button";
import ButtonSignUp from "../../Buttons/ButtonSignUp.jsx";
import * as S from "./authForm.styled";

const SignUp = () => {
  
  return (
    <S.Form>
      <S.LogoContainer>
        <S.Logo src="/img/logo_modal.png" />
      </S.LogoContainer>

      <Input placeholder={"Email"} width="278px"></Input>
      <Input placeholder={"Пароль"} width="278px"></Input>
      <Input placeholder={"Повторите пароль"} width="278px"></Input>
      <Input placeholder={"Имя (необязательно)"} width="278px"></Input>
      <Input placeholder={"Фамилия (необязательно)"} width="278px"></Input>
      <Input placeholder={"Город (необязательно)"} width="278px"></Input>

      <Button type="submit" margin="60px 0 20px 0" width="278px">
        Зарегистрироваться
      </Button>
      <ButtonSignUp type="button">Войти</ButtonSignUp>
    </S.Form>
  );
};

export default SignUp;
