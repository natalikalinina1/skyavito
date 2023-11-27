import Input from "../../InputForm/InputForm.jsx";
import Button from "../../Buttons/Button";
import ButtonSignUp from "../../Buttons/ButtonSignUp.jsx";
import * as S from "./authForm.styled";
import { getModal } from "../../../features/modal/modalSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLoginUserMutation } from "../../../features/auth/authApi.js";
import { isModalOpen } from "../../../features/modal/modalSlice.js";
import { useNavigate } from "react-router-dom";
import {
  setUser,
  setAccessToken,
  setRefreshToken,
} from "../../../features/auth/authSlice.js";
import { Preloader } from "../../../styles/preloader.styles.js";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
 
  const [login, { isLoading }] = useLoginUserMutation({})


  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (email === '' && password === '') {
      setErrorMessage('Введите email и пароль')
    } else if (email === '') {
      setErrorMessage('Введите email')
    } else if (password === '') {
      setErrorMessage('Введите пароль')
    } else {
      try {
        const tokens = await login({
          email,
          password,
        }).unwrap()

        dispatch(setAccessToken(tokens.access_token))
        dispatch(setRefreshToken(tokens.refresh_token))

        dispatch(setUser(true))
        setErrorMessage(null)
        dispatch(isModalOpen(false))

        dispatch(setAccessToken(tokens.access_token))
        dispatch(setRefreshToken(tokens.refresh_token))

        dispatch(setUser(true))
        setErrorMessage(null)
        dispatch(isModalOpen(false))
        navigate('/profile')
      } catch (err) {
        console.log(err)
        setErrorMessage('Неверный логин или пароль')
      }
    }
  }
  
  return (
    <>
      <S.Form onSubmit={(event) => handleSubmit(event)}>
        <S.LogoContainer>
          <S.Logo src="/img/logo_modal.png" />
        </S.LogoContainer>

        <Input
          onChange={(event) => handleEmail(event)}
          placeholder={"Email"}
          width="278px"
        />

        <Input
          type="password"
          onChange={(event) => handlePassword(event)}
          placeholder={"Пароль"}
          width="278px"
        />
        {errorMessage && <p>{errorMessage}</p>}
        <Button type="submit" margin="60px 0 20px 0" width="278px">
          {isLoading ? <Preloader /> : " Войти"}
        </Button>
      
        <ButtonSignUp
          onClick={() => {
            dispatch(getModal("sign-up"));
          }}
        >
          Зарегистрироваться
        </ButtonSignUp>
        
      </S.Form>
    </>
  );
};

export default Login;
