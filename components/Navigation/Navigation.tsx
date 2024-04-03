import Link from 'next/link'
import { Heart, ShoppingBasket, User } from 'lucide-react'
import { RoutesEnum } from '@/constants/routes'

const Navigation = () => {
  const items = [
    { icon: <Heart />, href: RoutesEnum.Favorites, text: 'Favorites' },
    { icon: <ShoppingBasket />, href: RoutesEnum.Cart, text: 'Корзина' },
    { icon: <User />, href: RoutesEnum.Profile, text: 'Profile' },
  ]

  return (
    <nav className="nav">
      <ul className="nav__list">
        {items.map((el) => {
          return (
            <li className="nav__item" key={el.text}>
              <Link className="nav__link" href={el.href}>
                {el.icon}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navigation
