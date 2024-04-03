'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import data from '@/lib/data'

type ProductProps = {
  params: {slug: string}
}

const Product = ({ params }: ProductProps) => {
  const chosenProduct = data.products.find((product) => product.slug == params.slug)

  const [imageNumber, setImageNumber] = useState<number>(0)

  const handleSetImage = (index: number) => {
    setImageNumber(index)
    console.log(imageNumber)
  }

  return (
    <section className="product">
      {chosenProduct ? (
        <div className="product__content">
          <div className="product__images">
            <Image
              className="product__image"
              src={chosenProduct.images[imageNumber].image}
              alt={chosenProduct.name}
              width={400}
              height={400}
              sizes="100vw"
            />
            <div className="product__subimages">
              {chosenProduct.images.map((el, index) => (
                <Image
                  key={index}
                  className="product__image product__image--small"
                  onClick={() => handleSetImage(index)}
                  src={el.image}
                  alt={chosenProduct.name}
                  width={400}
                  height={400}
                  sizes="100vw"
                />
              ))}
            </div>
          </div>
          <div className="product__details">
            <h2 className="product__name">{chosenProduct.name}</h2>
            <p className="product__brand">{chosenProduct.brand}</p>
            <p className="product__category">{chosenProduct.category}</p>
            <p className="product__price">{chosenProduct.price}</p>
            <p className="product__descripption">{chosenProduct.description}</p>
            <p className="product__descripption">{chosenProduct.size}</p>
          </div>
        </div>
      ) : (
        <p className="product__error">Product not found</p>
      )}
    </section>
  )
}

export default Product
