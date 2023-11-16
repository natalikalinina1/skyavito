import * as S from'./inputForm.styled'

const TextArea = ({ placeholder, name, id, width, height }) => {
  return (
    <S.StyledTextArea
      placeholder={placeholder}
      name={name}
      id={id}
      width={width}
      height={height}
    />
  )
}

export default TextArea
