import * as S from "./modal.styled";
import Cross from "../../Logo/Cross";
import ReactDOM from 'react-dom';

const Modal = ({ children, open, onClose }) => {

    if (!open) return null

    return ReactDOM.createPortal(
      <>
        <S.ModalContainer>
          <S.CloseButton onClick={onClose}>
            <Cross />
          </S.CloseButton>
        </S.ModalContainer>
      <S.Content>{children}</S.Content>
      </>,
    document.getElementById('portal')
  );
};

export default Modal;
