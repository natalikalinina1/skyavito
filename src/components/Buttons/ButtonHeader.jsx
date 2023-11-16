import * as S from './buttons.styled'

const ButtonHeader = ({ children, margin, onClick  }) => {
  return (
  <S.StyledButtonHeader margin={margin} onClick={onClick}>{children}</S.StyledButtonHeader>
  )
}

export default ButtonHeader
