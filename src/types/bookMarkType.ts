export type BookMarkListData = {
  bookId: number
  bookTitle: string
  publishedDate: string
  bookImgUrl: string
  authors: string[]
  description: string
  categories: string[]
  averageRating: number
  price: number
  bookmarkCount: number
  reviewCount: number
  viewCount: number
  quantityCount: any
  publisher: string
  createDate: string
  updateDate: string
  bookmarkId: number
}



export type WishListData = {
  id: number;
  image: string;
  title: string;
  author: string;
  rating: number;
  genre: string;
  price: number;
  clicked?: number;
};
