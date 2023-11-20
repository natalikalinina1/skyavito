import Input from "../../InputForm/InputForm";
import Button from "../../Buttons/Button";
import ButtonSignUp from "../../Buttons/ButtonSignUp.jsx";
import * as S from "./authForm.styled";
import { getModal, isModalOpen } from '../../../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSignUserUpMutation } from '../../../features/auth/authApi';
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../../features/auth/authSlice'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate


  const today = new Date()
  console.log(today.toISOString())

  const [userInfo, setUserInfo] = useState({
    password: '',
    role: 'user',
    email: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
    sells_from: today,
  })

  const [repeatPswd, setRepeatPswd] = useState('')
  const [passwordError, setPasswordError] = useState(null)

  const [signUp, { isLoading, isError }] = useSignUserUpMutation();

const isValid = userInfo.password === repeatPswd

const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (isValid) {
        const response = await signUp({ ...userInfo }).unwrap()
        console.log(response)
        setPasswordError(null)
        setUserInfo('')
        setRepeatPswd('')
        dispatch(setUser(true))
        dispatch(isModalOpen(false))
        navigate('/profile')
      } else {
        console.log('Пароли не совпадают')
        setPasswordError('Пароли не совпадают')
      }
    } catch (err) {
      console.log(err)
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
        placeholder={'Email'}
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
        placeholder={'Пароль'}
        name="password"
        width="278px"
        required
      />

      <Input
       type="password"
        onChange={(event) => setRepeatPswd(event.target.value)}
        placeholder={'Повторите пароль'}
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
        placeholder={'Имя (необязательно)'}
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
        placeholder={'Фамилия (необязательно)'}
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
        placeholder={'Город (необязательно)'}
        name="city"
        width="278px"
      />

      <p>{passwordError}</p>

      <Button type="submit" margin="60px 0 20px 0" width="278px">
        Зарегистрироваться
      </Button>
      <ButtonSignUp  type="button"
        onClick={() => {
          dispatch(getModal('login'))
        }}
      >
        Войти </ButtonSignUp>
    </S.Form>
  );
};

export default SignUp;
