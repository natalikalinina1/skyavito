import * as S from './addCard.styled'; 



import ButtonWithPhone from "../../components/Buttons/ButtonWithPhone";

const AddCard = () => {
  const item = {
    name: "Ракетка для большого тенниса Triumph Pro STС Б/У",
    price: "2 200 ₽",
    city: "Санкт Петербург",
    timeStamp: "Сегодня в 10:45",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    phone: "89600125523",
    sellerName: "Кирилл",
    sellerOnSiteSince: "Продает товары с августа 2021",
  };
 
  return (
    <>
      <S.AddCardDetails>
        
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

            <ButtonWithPhone phoneNumber={item.phone}></ButtonWithPhone>

            <S.Seller>
              <S.SellerImg />
              <div>
                <S.SellerLink to={"/seller"}>{item.sellerName}</S.SellerLink>
                <S.Text>{item.sellerOnSiteSince}</S.Text>
              </div>
            </S.Seller>
          </S.AddDetails>
      
      </S.AddCardDetails>

      <S.AddDescription>
        <h2>Описание товара</h2>
        <p>{item.description}</p>
      </S.AddDescription>
    </>
  );
};

export default AddCard;