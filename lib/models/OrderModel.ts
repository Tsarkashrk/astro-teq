export type Order = {
  _id?: string
  name: string
  slug: string
  images: string[]
  price: number
  brand: string
  description: string
  category: string
  rating: number
  numReviews?: number
  countInStock: number
  colors?: string[]
  sizes?: []
}
