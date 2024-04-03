'use client'

import { ReactNode, useState } from 'react'

type ButtonSoloProps = {
  icon?: ReactNode
}

const ButtonSolo = ({ icon }: ButtonSoloProps) => {
  const [clickButton, setClickButton] = useState<boolean>(false)

  const handleClick = () => {
    setClickButton(!clickButton)
  }

  return (
    <button className={`button-solo ${clickButton ? 'button-solo--clicked' : ''}`} onClick={handleClick}>
      {icon}
    </button>
  )
}

export default ButtonSolo
