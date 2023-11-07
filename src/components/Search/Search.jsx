import * as S from "./search.styled";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Logo from "../Logo/Logo";

const Search = () => {
  return (
    <S.SearchContainer>
      <S.LogoDiv>
        <Link to="/">
          <Logo />
        </Link>
      </S.LogoDiv>

      <S.Input>
        <input type="search" placeholder="Поиск по объявлениям" name="search" />
      </S.Input>
      <Button
        hoverColor={"#0080C1"}
        padding={"13px 37px"}
        margin={"0 0  0 10px"}
      >
        Найти
      </Button>
    </S.SearchContainer>
  );
};

export default Search;
