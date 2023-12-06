import * as S from  './inputForm.styled';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Input = React.forwardRef((props, ref) => {
  return (
    <S.StyledInput
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      width={props.width}
      placeholderColor={props.placeholderColor}
      onClick={props.onClick}
      onChange={props.onChange}
    />
  );
});

export default Input;