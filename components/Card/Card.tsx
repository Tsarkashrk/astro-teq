import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LucideShoppingBasket, Coins, Heart } from 'lucide-react'

import { Product } from '@/lib/models/ProductModel'
import { RoutesEnum } from '@/constants/routes'
import Button from '../Buttons/Button/Button'
import ButtonSolo from '../Buttons/ButtonSolo/ButtonSolo'

interface CardProps {
  product: Product
}

const Card = ({ product }: CardProps) => {
  return (
    <div className="card">
      <figure className="card__figure">
        <Link
          className="card__link"
          href={`${RoutesEnum.Categories}/${product.category}/${product.slug}`}>
          <Image
            className="card__image"
            src={product.images[0].image}
            alt={product.name}
            width={250}
            height={250}
            sizes="100vw"
          />
        </Link>
      </figure>
      <div className="card__body">
        <div className="card__content">
          <Link
            className="card__link"
            href={`${RoutesEnum.Categories}/${product.category}/${product.slug}`}>
            <h2 className="card__title">{product.name}</h2>
          </Link>
          <div className="card__colors">
            {product.images.map((el, index) => (
              <div
                className="card__color"
                key={index}
                style={{ backgroundColor: `${el.color}` }}></div>
            ))}
          </div>
        </div>
        <div className="card__bottom">
          <p className="card__price">
            <Coins size={18} />
            {product.price} ₸
          </p>
          <div className="card__buttons">
            <ButtonSolo icon={<Heart />} />
            <Button icon={<LucideShoppingBasket />} text="В корзину" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
