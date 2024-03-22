export interface ProductType {
  id: string,
  name: string,
  desc: string,
  images: string[
  ],
  price: number,
  slug: string,
  id_category: {
    id: string,
    categoryName: string
  },
  gender: string,
  rating: number
};