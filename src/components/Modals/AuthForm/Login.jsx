import Input from "../../InputForm/InputForm";
import Button from "../../Buttons/Button";
import ButtonSignUp from "../../Buttons/ButtonSignUp.jsx";
import * as S from "./authForm.styled";
import Modal from "../Modal/Modal";
import SignUp from "./SignUp";

const Login = () => {
  
  return (
    <>
      <Modal >
      <SignUp/>
      </Modal>
      <S.Form>
        <S.LogoContainer>
          <S.Logo src="/img/logo_modal.png" />
        </S.LogoContainer>

        <Input placeholder={"Email"} width="278px"></Input>
        <Input placeholder={"Пароль"} width="278px"></Input>

        <Button type="submit" margin="60px 0 20px 0" width="278px">
          Войти
        </Button>
        <ButtonSignUp>
          Зарегистрироваться
        </ButtonSignUp>
      </S.Form>
    </>
  );
};

export default Login;
