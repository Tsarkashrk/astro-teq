type Images = {
  color: string
  image: string
}

export type Product = {
  _id?: string
  name: string
  slug: string
  category: string
  images: Images[]
  price: number
  brand: string
  description: string
  rating: number
  countInStock: number
  size?: string[]
}
