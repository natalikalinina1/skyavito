import * as S from './buttons.styled'

const ButtonHeader = ({ children, margin }) => {
  return <S.StyledButtonHeader margin={margin}>{children}</S.StyledButtonHeader>
}

export default ButtonHeader
