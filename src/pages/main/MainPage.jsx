import Card from '../../components/Card/Card'
import * as S from './mainPage.styled'

const MainPage = () => {
  return (
    <div >
      <S.Title>Объявления</S.Title>
      <Card count="8" />
    </div>
  )
}

export default MainPage