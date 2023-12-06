import * as S from './search.styled';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import Button from '../Buttons/Button';
import Logo from '../Logo/Logo';
import Input from '../InputForm/InputForm';
import { useState, useEffect} from 'react';
import { getSearchValue } from '../../features/card/cardSlice';
import { useDispatch, useSelector} from 'react-redux';
import { logUserOut } from '../../features/auth/authSlice';

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user);
  const [search, setSearch] = useState('');

  useEffect(() => { //отправка значения поиска в хранилище Redux при изменении этого значения.
    dispatch(getSearchValue(search));
  }, [search, dispatch]);
  return (
    <S.SearchContainer>
      <S.LogoDiv>
        <Link to="/">
          <Logo />
        </Link>
      </S.LogoDiv>

      {location.pathname === '/' ? (
        <>
          <Input
            placeholder={'Поиск по объявлениям'}
            type={'search'}
            width={'100%'}
            onChange={(event) => setSearch(event.target.value)}
          />

          <Button margin={'0 0  0 10px'}>Найти</Button>
        </>
      ) : (
        <>
          <Link to="/">
            <Button margin={'0 0  0 10px'}>Вернуться на главную</Button>
          </Link>

          {user && (
            <Button
              margin={'0 0  0 10px'}
              onClick={() => {
                dispatch(logUserOut());
                navigate('/');
              }}
            >
            Выйти
            </Button>
          )}
        </>
      )}
    </S.SearchContainer>
  );
};

export default Search;
