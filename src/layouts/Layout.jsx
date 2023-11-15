import { Link, Outlet } from "react-router-dom";
import * as S from "./layout.styled";
import ButtonHeader from "../components/Buttons/ButtonHeader";
import Search from "../components/Search/Search";
import { useState } from "react";
import Modal from "../components/Modals/Modal/Modal";
import Login from "../components/Modals/AuthForm/Login";
import SignUp from "../components/Modals/AuthForm/SignUp";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const user = false
  const isRegister = true;
  return (
    <div>
      <S.Header>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {isRegister ? <Login /> : <SignUp />}
        </Modal>
        {user ? (
          <S.Nav>
            <ButtonHeader margin={"0 10px"}>Разместить объявление</ButtonHeader>

            <Link to="profile">
              <ButtonHeader>Личный кабинет</ButtonHeader>
            </Link>
          </S.Nav>
        ) : (
          <S.Nav>
            <ButtonHeader onClick={() => setIsOpen(true)}>
              Вход в личный кабинет
            </ButtonHeader>
          </S.Nav>
        )}
      </S.Header>
      <S.Main>
        <Search />
        <Outlet />
      </S.Main>
    </div>
  );
};

export default Layout;
