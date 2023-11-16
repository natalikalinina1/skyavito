import Input from "../../InputForm/InputForm";
import Button from "../../Buttons/Button";
import TextArea from "../../InputForm/TextArea";
import * as S from "./addUpdateModal.styled";

const AddModal = () => {
  return (
    <S.StyledAddModal>
      <S.Title>Новое объявление</S.Title>
      <S.Heading>Название</S.Heading>
      <Input type="text" width={"100%"} placeholder="Введите название" />

      <S.Heading>Описание</S.Heading>
      <TextArea
        width={"100%"}
        height={"200px"}
        placeholder="Введите описание"
      />

      <S.Images>
        <div>
          <S.Heading>Фотографии товара</S.Heading>
          <span>не более 5 фотографий</span>
        </div>
        <div>
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
          <S.Image />
        </div>
      </S.Images>

      <S.Heading>Цена</S.Heading>
      <S.Price>
        <Input type="text" width={"200px"} />
      </S.Price>

      <Button margin={"10px 0 0 0"}>Опубликовать</Button>
    </S.StyledAddModal>
  );
};

export default AddModal;
