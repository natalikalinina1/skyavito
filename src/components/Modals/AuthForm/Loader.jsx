import React from 'react';
import * as S from './authForm.styled';

export const Loader = () => {
  return (
    <S.PreloaderWrapper>
      <S.Loader />
      <S.LoadingMessage style={{ color: 'black',fontSize: '19px'  }}>
      Регистрируем... Далее войдите в аккаунт
      </S.LoadingMessage>
    </S.PreloaderWrapper>
  );
};

export default Loader;
