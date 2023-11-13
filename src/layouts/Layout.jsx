import { Link, Outlet } from "react-router-dom";
import * as S  from "./layout.styled";
import Button from "../components/Buttons/Button";
import Search from "../components/Search/Search";

const Layout = () => {
  const user = true
  return (
    <div>
      <S.Header>
      {user ? (
          <S.Nav>
            <Link to="place-add">
              <Button
                hoverColor="rgba(255, 255, 255, 0.15)"
                padding={'8px 24px'}
                margin={'0 10px'}
              >
                Разместить объявление
              </Button>
            </Link>
            <Link to="profile">
              <Button
                hoverColor="rgba(255, 255, 255, 0.15)"
                padding={'8px 24px'}
              >
                Личный кабинет
              </Button>
            </Link>
          </S.Nav>
        ) : (
          <S.Nav>
            <Link to="profile">
              <Button
                hoverColor="rgba(255, 255, 255, 0.15)"
                padding={'8px 24px'}
              >
                Вход в личный кабинет
              </Button>
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
