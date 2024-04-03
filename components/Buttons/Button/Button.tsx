'use client'

import { ReactNode, useState } from 'react'

interface ButtonProps {
  text?: string
  icon?: ReactNode
}

const Button = ({ text, icon }: ButtonProps) => {
  const [clickButton, setClickButton] = useState<boolean>(false)

  const handleClick = () => {
    setClickButton(!clickButton)
  }

  return (
    <button className={`button ${clickButton ? 'button--clicked' : ''}`} onClick={handleClick}>
      {icon}
      <div className="button__text">
        {text === 'В корзину' && clickButton === true ? 'В корзине' : text}
      </div>
    </button>
  )
}

export default Button
