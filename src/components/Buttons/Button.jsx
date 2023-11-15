import * as S from  './buttons.styled'

const Button = ({ children, onClick, margin, width, backGround }) => {
  return (
    <S.StyledButton onClick={onClick}
    margin={margin}
    width={width}
    backGround={backGround}>
      {children}
    </S.StyledButton>
  )
}

export default Button