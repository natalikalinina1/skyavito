import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useChangeUserPasswordMutation } from '../../../features/users/usersApi';
import { isModalOpen } from "../../../features/modal/modalSlice.js";
import { setCurrentUserPassword } from'../../../features/users/usersSlice.js';
import * as S from "./authForm.styled";
import Input from "../../InputForm/InputForm.jsx";
import Button from "../../Buttons/Button";
import { Preloader } from '../../../styles/preloader.styles.js';

const ChangePasswordModal = () => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [changePassword, { isLoading }] = useChangeUserPasswordMutation();

  const handleOldPasswordChange = (event) => { 
    setOldPassword(event.target.value); 
  }; 

  const handleNewPasswordChange = (event) => { 
    setNewPassword(event.target.value); 
  };

  const handleSubmit = async (event) => { 
    event.preventDefault(); 
    if (oldPassword === '' || newPassword === '') { 
      setErrorMessage('Заполните оба поля'); 
    } else { 
      try {
        const response = await changePassword({ password_1: oldPassword, password_2: newPassword });
        dispatch(setCurrentUserPassword(response.data));
        setErrorMessage(''); 
        dispatch(isModalOpen(false)); 
      } catch (error) { 
        setErrorMessage('Ошибка при изменении пароля'); 
      } 
    } 
  }; 

  return  (
        
        <S.Form onSubmit={handleSubmit}>
        <S.LogoContainer>
          <S.Logo src="/img/logo_modal.png" />
        </S.LogoContainer>
            <Input
              placeholder={"Введите старый пароль"}
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={handleOldPasswordChange}
            />

            <Input
            placeholder={"Введите новый пароль"}
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          {errorMessage && <p>{errorMessage}</p>}
          <Button type="submit" margin="20px 0 0 0" width="278px">
            {isLoading ? <Preloader /> : 'Изменить пароль'}
          </Button>
        </S.Form>
   
  );
};

export default ChangePasswordModal;




