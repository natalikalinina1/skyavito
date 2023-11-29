import Card from "../../components/Card/Card";
import * as S from "./mainPage.styled";
import { useGetAllCardQuery } from "../../features/card/cardApi";
import { getAllCard, getUsers } from "../../features/card/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetUsersQuery } from "../../features/users/usersApi";
import { Preloader } from "../../styles/preloader.styles";

const MainPage = () => {
  const dispatch = useDispatch();
  const allCard = useSelector((state) => state.card?.allCard);
  const searchValue = useSelector((state) => state.card?.search);

  const { data: card, isLoading, isSuccess, isError } = useGetAllCardQuery();

  const { data: users } = useGetUsersQuery();

  useEffect(() => {
    dispatch(getUsers(users));
  }, [users, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getAllCard(card));
    }
  }, [dispatch, isSuccess, card]);

  let content;

  if (isLoading) {
    content = <Preloader />;
  } else if (isSuccess) {
    content = (
      <Card
        card={allCard?.filter((add) =>
          searchValue.toLowerCase() === ""
            ? add
            : add.title.toLowerCase().includes(searchValue)
        )}
      />
    );
  } else if (isError) {
    content = <p>Произошла ошибка</p>;
  }

  return (
    <div>
      <S.Title>Объявления</S.Title>
      {content}
    </div>
  );
};

export default MainPage;
