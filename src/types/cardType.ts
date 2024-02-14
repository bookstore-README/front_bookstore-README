interface BookDetailCardType {
  bookId: number;
  publishedDate: string;
  orderNum: number;
  categories: [string, string];
  bookTitle: string;
  bookImgUrl: string;
  price: number;
  authors?: string[] | [];
  translator?: string;
  publisher?: string;
  views: number;
  bookmarkNum: number;
  reviewCount: number;
  averageRating: number;
  isBookmarked: boolean;
}

export type { BookDetailCardType };
