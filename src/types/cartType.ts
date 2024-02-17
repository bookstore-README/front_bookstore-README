export type CartItem = {
  basketId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  count: number;
  authors: string[];
};

export type PayMentAtom = {
  basketId?: number;
  bookId?: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  authors: string[];
  clicked?: number;
};
