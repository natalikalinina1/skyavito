import { Link, Outlet } from "react-router-dom";
import * as S  from "./layout.styled";
import ButtonHeader from '../components/Buttons/ButtonHeader'
import Search from "../components/Search/Search";

const Layout = () => {
  const user = true
  return (
    <div>
      <S.Header>
      {user ? (
          <S.Nav>
            <Link to="place-add">
            <ButtonHeader margin={'0 10px'}>
                Разместить объявление
              </ButtonHeader>
            </Link>
            <Link to="profile">
              <ButtonHeader>
                Личный кабинет
              </ButtonHeader>
            </Link>
          </S.Nav>
        ) : (
          <S.Nav>
            <Link to="profile">
              <ButtonHeader>
                Вход в личный кабинет
              </ButtonHeader>
            </Link>
          </S.Nav>
        )}
      </S.Header>
      <S.Main>
      <Search/>
        <Outlet />
      </S.Main>
    </div>
  );
};

export default Layout;
