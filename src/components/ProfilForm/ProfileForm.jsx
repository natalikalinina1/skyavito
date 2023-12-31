import Input from '../InputForm/InputForm';
import Button from '../Buttons/Button';
import * as S from './profileForm.styled';
import React, { useState, useEffect } from 'react';
import { changeUserInfo } from '../../features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  useChangeUserMutation,
  useUploadAvatarMutation,
} from '../../features/users/usersApi';
import { BASE_URL } from '../../features/api/apiSlice';
import { Preloader } from '../../styles/preloader.styles';


const ProfileForm = ({ isSuccess, avatarImg }) => {
  const dispatch = useDispatch();
  const inputRef = React.createRef();

  const avatarImgSrc =
    avatarImg !== null ? `${BASE_URL}${avatarImg}` : '/img/icon_01.png';

  const user = useSelector((state) => state.users?.currentUser);

  const [values, setValues] = useState({
    name: user?.name,
    surname: user?.surname,
    city: user?.city,
    phone: user?.phone,
  });

  const [isActive, setIsActive] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [
    changeUser,
    {
      isLoading: isUserChangeLoading,
      isError: isUserChangeError,
      error: userChangeError,
    },
  ] = useChangeUserMutation(); //для изменения данных пользователя

  const [changeAvatar] = useUploadAvatarMutation();

  const handleAvatar = (event) => {  //изменение аватара
    setAvatar(event.target.files[0]);
    setAvatarPreview(event.target.files[0]);

    setIsActive(false);
  };
  

  const handleName = (event) => {
  
    setValues({ ...values, name: event.target.value });
    dispatch(changeUserInfo(values.name));
    setIsActive(false);
  };

  const handleSurname = (event) => {
    setValues({ ...values, surname: event.target.value });
    dispatch(changeUserInfo(values.surname));
    setIsActive(false);
  };

  const handleCity = (event) => {
    setValues({ ...values, city: event.target.value });
    dispatch(changeUserInfo(values.city));
    setIsActive(false);
  };

  const handlePhone = (event) => {
    const phoneValue = event.target.value.replace(/[^\d]/g, '');
    setValues({ ...values, phone: phoneValue });
    dispatch(changeUserInfo(values.phone));
    setIsActive(false);
  };

  const handleSubmit = async () => {
    try {
      await changeUser(values).unwrap();
      setIsActive(true);

      if (avatar) {
        // eslint-disable-next-line no-undef
        const formData = new FormData();
        formData.append('file', avatar);
        changeAvatar(formData);
      }
    } catch (err) {
      // eslint-disable-next-line no-undef
      console.log(err);
    }
  };

  useEffect(() => {
    if (isUserChangeError) {
      // eslint-disable-next-line no-undef
      console.log(userChangeError);
    }
  }, [isUserChangeError, userChangeError]);

  useEffect(() => {
    if (isSuccess) {
      setAvatarPreview(null);
    }
  }, [isSuccess]);

  return (
    <S.AccountForm onSubmit={(event) => event.preventDefault()}>
      <S.Image>
        <img
          src={
            // eslint-disable-next-line no-undef
            avatarPreview ? URL.createObjectURL(avatarPreview) : avatarImgSrc
          }
          alt="avatar"
        />
        <input
          type="file"
          id="avatar"
          onChange={(event) => handleAvatar(event)}
        />
        <label htmlFor="avatar">Заменить</label>
      </S.Image>
      <S.Data>
        <S.Inputs>
          <div>
            <S.Label htmlFor="name">Имя</S.Label>
            <Input
              placeholder={user?.name}
              name="name"
              id="name"
              type="text"
              width="300px"
              value={values.name}
              onChange={(event) => handleName(event)}
              ref={inputRef}
            />
          </div>
          <div>
            <S.Label htmlFor="surname">Фамилия</S.Label>
            <Input
              placeholder={user?.surname}
              name="surname"
              type="text"
              id="surname"
              width="300px"
              value={values.surname}
              onChange={(event) => handleSurname(event)}
              ref={inputRef}
            />
          </div>
          <div>
            <S.Label htmlFor="city">Город</S.Label>
            <Input
              placeholder={user?.city}
              name="city"
              type="text"
              id="city"
              width="300px"
              value={values.city}
              onChange={(event) => handleCity(event)}
              ref={inputRef}
            />
          </div>
          <div>
            <S.Label htmlFor="phone">Телефон</S.Label>
            <Input
              placeholder={user?.phone}
              name="phone"
              type="tel"
              id="phone"
              width="614px"
              value={values.phone}
              onChange={(event) => handlePhone(event)}
              ref={inputRef}
            />
          </div>
        </S.Inputs>

        <Button
          disabled={isActive}
          onClick={() => handleSubmit()}
          margin="30px 0  0 0"
        >
          {isUserChangeLoading ? <Preloader />  : 'Сохранить'}
        </Button>
      </S.Data>
    </S.AccountForm>
  );
};

export default ProfileForm;