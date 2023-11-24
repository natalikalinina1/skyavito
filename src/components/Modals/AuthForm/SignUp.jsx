import Input from "../../InputForm/InputForm.jsx";
import Button from "../../Buttons/Button.jsx";
import ButtonSignUp from "../../Buttons/ButtonSignUp.jsx";
import * as S from "./authForm.styled";
import { getModal, isModalOpen } from "../../../features/modal/modalSlice.js";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSignUserUpMutation } from "../../../features/auth/authApi.js";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../features/auth/authSlice.js";
import { Preloader } from "../../../styles/preloader.styles.js";

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate

  const [userInfo, setUserInfo] = useState({
    password: '',
    role: 'user',
    email: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
  })

  const [repeatPswd, setRepeatPswd] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [signUp, { isLoading, isError }] = useSignUserUpMutation()

  useEffect(() => {
    if (isError) {
      setErrorMessage('Неверный логин или пароль')
    } else if (userInfo.email === '' && userInfo.password === '') {
      setErrorMessage('Введите email и пароль')
    } else if (userInfo.email === '') {
      setErrorMessage('Введите email')
    } else if (userInfo.password === '') {
      setErrorMessage('Введите пароль')
    }
  }, [isError, userInfo])

  const isValid = userInfo.password === repeatPswd && userInfo.email

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (isValid) {
        await signUp({ ...userInfo }).unwrap()

        setErrorMessage(null)
        setUserInfo('')
        setRepeatPswd('')
        dispatch(setUser(true))

        dispatch(isModalOpen(false))
        navigate('/profile')
      } else {
        setErrorMessage('Пароли не совпадают')
      }
    } catch (err) {
      console.log(err)
      setErrorMessage('Произошла ошибка')
    }
  }

  return (
    <S.Form onSubmit={(event) => handleSubmit(event)}>
      <S.LogoContainer>
        <S.Logo src="/img/logo_modal.png" />
      </S.LogoContainer>

      <Input
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            email: event.target.value,
          })
        }
        placeholder={"Email"}
        type="email"
        name="email"
        width="278px"
        required
      />

      <Input
        type="password"
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            password: event.target.value,
          })
        }
        placeholder={"Пароль"}
        name="password"
        width="278px"
        required
      />

      <Input
        type="password"
        onChange={(event) => setRepeatPswd(event.target.value)}
        placeholder={"Повторите пароль"}
        width="278px"
        required
      />

      <Input
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            name: event.target.value,
          })
        }
        placeholder={"Имя (необязательно)"}
        name="name"
        width="278px"
      />

      <Input
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            surname: event.target.value,
          })
        }
        placeholder={"Фамилия (необязательно)"}
        name="surname"
        width="278px"
      />

      <Input
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            city: event.target.value,
          })
        }
        placeholder={"Город (необязательно)"}
        name="city"
        width="278px"
      />

      <p>{errorMessage}</p>

      <Button type="submit" margin="60px 0 20px 0" width="278px">
        {isLoading ? <Preloader /> : "Зарегистрироваться"}{" "}
      </Button>
      <ButtonSignUp
        type="button"
        onClick={() => {
          dispatch(getModal("login"));
        }}
      >
        Войти{" "}
      </ButtonSignUp>
    </S.Form>
  );
};

export default SignUp;
