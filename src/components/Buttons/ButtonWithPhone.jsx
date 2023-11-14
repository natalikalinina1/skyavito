import * as S  from './buttons.styled.js'
import { useState } from 'react'
import { getPhoneMasked , formatPhone } from './utils.js'

const ButtonWithPhone = ({ phoneNumber }) => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false)

  return (
    <S.StyledButtonWithPhone onClick={() => setShowPhoneNumber((prev) => !prev)}>
      {showPhoneNumber ? (
        <>
          <p>Показать телефон</p>
          <span>{formatPhone(phoneNumber)}</span>
        </>
      ) : (
        <>
          <p>Скрыть телефон</p>
          <span>{getPhoneMasked (phoneNumber)}</span>
        </>
      )}
    </S.StyledButtonWithPhone>
  )
}

export default ButtonWithPhone