import Input from "../../InputForm/InputForm";
import Button from "../../Buttons/Button";
import TextArea from "../../InputForm/TextArea";
import * as S from "./addUpdateModal.styled";

const UpdateModal = () => {
  const item = {
    name: "Ракетка для большого тенниса Triumph Pro STС Б/У",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "2 200",
  };
  return (
    <S.StyledAddModal>
      <S.Title>Редактировать объявление</S.Title>
      <S.Heading>Название</S.Heading>
      <Input
        type="text"
        width={"100%"}
        placeholder="Введите название"
        value={item.name}
      />

      <S.Heading>Описание</S.Heading>
      <TextArea
        width={"100%"}
        height={"200px"}
        placeholder="Введите описание"
        value={item.description}
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
        <Input type="text" width={"200px"} value={item.price} />
      </S.Price>

      <Button margin={"10px 0 0 0"}>Опубликовать</Button>
    </S.StyledAddModal>
  );
};

export default UpdateModal;
