import * as S from  './buttons.styled'

const Button = ({ children, onClick, margin }) => {
  return (
    <S.StyledButton onClick={onClick} margin={margin}>
      {children}
    </S.StyledButton>
  )
}

export default Button