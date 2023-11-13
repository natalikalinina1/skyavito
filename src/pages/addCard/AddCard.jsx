import * as S from './addCard.styled'; 
import { useParams, Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const AddCard = () => {
  const item = {
    name: "Ракетка для большого тенниса Triumph Pro STС Б/У",
    price: "2 200 ₽",
    city: "Санкт Петербург",
    timeStamp: "Сегодня в 10:45",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    phone: "12345789",
    sellerName: "Кирилл",
    sellerOnSiteSince: "Продает товары с августа 2021",
  };
  const { id } = useParams();
  return (
    <>
      <S.AddCardDetails>
        <Link>
          <S.AddImages>
            <S.MainImg></S.MainImg>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </S.AddImages>
          <S.AddDetails>
            <h1>{item.name}</h1>
            <S.AddItemInfo>
              <S.Text>Сегодня в 10:45</S.Text>
              <S.Text>Санкт-Петербург</S.Text>
              <span>23 отзыва</span>
            </S.AddItemInfo>

            <h3>{item.price}</h3>

            <Button hoverColor="#0080C1" padding={"10px 37px"}>
              <p> Показать телефон </p>
              <span>8 905 ХХХ ХХ ХХ</span>
            </Button>

            <S.Seller>
              <S.SellerImg />
              <div>
                <S.SellerLink to={"/seller"}>{item.sellerName}</S.SellerLink>
                <S.Text>{item.sellerOnSiteSince}</S.Text>
              </div>
            </S.Seller>
          </S.AddDetails>
        </Link>
      </S.AddCardDetails>

      <S.AddDescription>
        <h2>Описание товара</h2>
        <p>{item.description}</p>
      </S.AddDescription>
    </>
  );
};

export default AddCard;