
import * as S  from './buttons.styled';

const ButtonSignUp = ({ children, onClick  }) => {
  return ( <S.ButtonSignUp type="button" onClick={onClick}> {children}</S.ButtonSignUp>
  );
};

export default ButtonSignUp;