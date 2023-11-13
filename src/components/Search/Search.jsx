import * as S from "./search.styled";
import { Link, useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import Logo from "../Logo/Logo";
import Input from "../InputForm/InputForm";

const Search = () => {
  const location = useLocation();
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
          />

          <Button
            hoverColor={"#0080C1"}
            padding={"13px 37px"}
            margin={"0 0  0 10px"}
          >
            Найти
          </Button>
        </>
      ) : (
        <Link to="/">
          <Button
            hoverColor={"#0080C1"}
            padding={"13px 37px"}
            margin={"0 0  0 10px"}
          >
            Вернуться на главную
          </Button>
        </Link>
      )}
    </S.SearchContainer>
  );
};

export default Search;
