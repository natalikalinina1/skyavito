import Input from "../InputForm/InputForm";
import Button from "../Buttons/Button";
import * as S from "./profileForm.styled";
import React, { useState, useEffect, useRef } from "react";
import { changeUserInfo } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  useChangeUserMutation,
  useUploadAvatarMutation,
} from "../../features/users/usersApi";

const ProfileForm = ({ person }) => {
  const dispatch = useDispatch();
  const inputRef = React.createRef();

  const user = useSelector((state) => state.users?.currentUser);

  const [values, setValues] = useState({
    name: user?.name,
    surname: user?.surname,
    city: user?.city,
    phone: user?.phone,
  });

  const [isActive, setIsActive] = useState(true);
  const [avatar, setAvatar] = useState(null);

  const [changeUser, { isLoading, isError, error }] = useChangeUserMutation();
  const [changeAvatar] = useUploadAvatarMutation();

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
    setValues({ ...values, phone: event.target.value });
    dispatch(changeUserInfo(values.phone));
    setIsActive(false);
  };

  const handleSubmit = async (async) => {
    try {
      await changeUser(values).unwrap();
      setIsActive(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError, error]);

  return (
    <S.AccountForm onSubmit={(event) => event.preventDefault()}>
      <S.Image>
        <img
          src={user.avatar !== null ? user.avatar : "/img/no_picture.png"}
          alt="avatar"
        />
        <p>Заменить</p>
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
              placeholderColor="#000"
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
              placeholderColor="#000"
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
              placeholderColor="#000"
              onChange={(event) => handleCity(event)}
              ref={inputRef}
            />
          </div>

          <div>
            <S.Label htmlFor="phone">Телефон</S.Label>
            <Input
              placeholder={user?.phone}
              name="phone"
              type="text"
              id="phone"
              width="614px"
              placeholderColor="#000"
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
          Сохранить
        </Button>
      </S.Data>
    </S.AccountForm>
  );
};

export default ProfileForm;
