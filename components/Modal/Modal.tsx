import React from 'react'
import Link from 'next/link'
import { Headphones, Keyboard, Mouse, Rows3 } from 'lucide-react'
import { RoutesEnum } from '@/constants/routes'

const Modal = () => {
  const items = [
    { icon: <Keyboard />, href: RoutesEnum.Keyboards, text: 'Клавиатуры' },
    { icon: <Mouse />, href: RoutesEnum.Mouses, text: 'Мышки' },
    { icon: <Headphones />, href: RoutesEnum.Headphones, text: 'Наушники' },
    { icon: <Rows3 />, href: RoutesEnum.Categories, text: 'Все категории' },
  ]

  return (
    <div className="modal">
      <ul className="modal__list">
        {items.map((el) => {
          return (
            <li className="modal__item" key={el.text}>
              <Link className="modal__link" href={el.href}>
                {el.icon}
                <p className="modal__text">{el.text}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Modal
