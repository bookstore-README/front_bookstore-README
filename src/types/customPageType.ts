export type CusTomBookType = {
  bookId: number;
  bookTitle: string;
  publishedDate: string;
  bookImgUrl: string;
  authors: string[];
  description: string;
  categories: string[];
  averageRating: number;
  price: number;
  bookmarkCount: number;
  reviewCount: number;
  viewCount: number;
  publisher: string;
  createDate: string;
  updateDate: string;
};

export type SelectedBookType = {
  title: string;
  selected: boolean;
};
