import * as S from "./modal.styled";
import Cross from "../../Logo/Cross";
import ReactDOM from 'react-dom';
import Login from '../AuthForm/Login'
import SignUp from '../AuthForm/SignUp'
import AddModal from '../AddUpdateModal/AddModal'
import Reviews from '../ReviewModal/Reviews';
import { isModalOpen } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import UpdateModal from "../AddUpdateModal/UpdateModal";

const Modal = ({ modal, reviews }) => {
  const dispatch = useDispatch()

  if (!modal) return null
    return ReactDOM.createPortal(
      <>
        <S.ModalContainer>
          <S.CloseButton onClick={() => dispatch(isModalOpen(false))}>
            <Cross />
          </S.CloseButton>
        </S.ModalContainer>
      <S.Content> 
        {modal === 'login' && <Login />}
        {modal === 'sign-up' && <SignUp />}
        {modal === 'add-modal' && <AddModal/>}
        {modal === 'update-modal' && <UpdateModal />}
        {modal === 'reviews' && <Reviews reviews={reviews} />}</S.Content>
      </>,
    document.getElementById('portal')
  );
};

export default Modal;
