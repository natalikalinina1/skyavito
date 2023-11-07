import * as S from  './buttons.styled'

const Button = ({ children, padding, onClick, hoverColor, margin }) => {
  return (
    <S.StyledButton
      onClick={onClick}
      hoverColor={hoverColor}
      padding={padding}
      margin={margin}
    >
      {children}
    </S.StyledButton>
  )
}

export default Button