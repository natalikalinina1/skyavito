import * as S from "./search.styled";
import { Link, useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import Logo from "../Logo/Logo";
import Input from "../InputForm/InputForm";
import { useState, useEffect } from 'react'
import { getSearchValue } from '../../features/card/cardSlice'
import { useDispatch } from 'react-redux'

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getSearchValue(search))
  }, [search, dispatch])
  return (
    <S.SearchContainer>
      <S.LogoDiv>
        <Link to="/">
          <Logo />
        </Link>
      </S.LogoDiv>

      {location.pathname === "/" ? (
        <>
          <Input
            placeholder={"Поиск по объявлениям"}
            type={"search"}
            width={"100%"}
            onChange={(event) => setSearch(event.target.value)}
          />

           <Button margin={'0 0  0 10px'}>Найти</Button>
        </>
      ) : (
        <Link to="/">
           <Button margin={'0 0  0 10px'}>Вернуться на главную</Button>
        </Link>
      )}
    </S.SearchContainer>
  );
};

export default Search;
