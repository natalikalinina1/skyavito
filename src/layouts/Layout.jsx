import { NavLink, Outlet } from "react-router-dom";
import * as S  from "./layout.styled";
import Button from "../components/Buttons/Button";
import Search from "../components/Search/Search";
const Layout = () => {
  return (
    <div>
      <S.Header>
        <S.Nav>
          <Button hoverColor="rgba(255, 255, 255, 0.15)" padding={"8px 24px"}>
            <NavLink to="profile">Личный кабинет</NavLink>
          </Button>
        </S.Nav>
      </S.Header>
      <S.Main>
      <Search/>
        <Outlet />
      </S.Main>
    </div>
  );
};

export default Layout;
