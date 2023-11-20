import * as S from  './buttons.styled'

const Button = ({ children, onClick, margin, width, backGround, disabled }) => {
  return (
    <S.StyledButton onClick={onClick}
    margin={margin}
    width={width}
    backGround={backGround}
    disabled={disabled}>
      {children}
      
    </S.StyledButton>
  )
}

export default Button