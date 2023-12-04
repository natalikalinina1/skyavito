import { Link, Outlet } from 'react-router-dom';
import * as S from './layout.styled';
import ButtonHeader from '../components/Buttons/ButtonHeader';
import Search from '../components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getModal, isModalOpen } from '../features/modal/modalSlice';
import Modal from '../components/Modals/Modal/Modal';


const Layout = () => {
 
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth?.user);
  const isLoginOpen = useSelector((state) => state.modal.isOpen);
  const modalName = useSelector((state) => state.modal.modal);
  return (
    <div>
      <S.Header>
        {isLoginOpen && <Modal modal={modalName}></Modal>}
      
        {user ? (
          <S.Nav>
            <ButtonHeader  margin={'0 10px'}
              onClick={() => {
                dispatch(isModalOpen(true));
                dispatch(getModal('add-modal'));
              }}
            >
              Разместить объявление
            </ButtonHeader>
            <ButtonHeader  margin={'0 10px'}
              onClick={() => {
                dispatch(isModalOpen(true));
                dispatch(getModal('change-modal'));
              }}
            >
         Сменить пароль
            </ButtonHeader>

            <Link to="profile">
              <ButtonHeader>Личный кабинет</ButtonHeader>
            </Link>
          </S.Nav>
        ) : (
          <S.Nav>
            <ButtonHeader onClick={() => {
              dispatch(isModalOpen(true));
              dispatch(getModal('login'));
            }}>
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
