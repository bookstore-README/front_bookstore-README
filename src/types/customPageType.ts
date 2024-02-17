export type CusTomBookType = {
  bookId: number;
  bookTitle: string;
  bookImgUrl: string;
  authors: string[];
  categories: string[];
  createDate: string;
  updateDate: string;
  viewCount: number;
  bookmarkCount: number;
  price: number;
};

export type SelectedGenre = {
  categoryId: string;
  title: string;
  selected: boolean;
};

export type PreferredGenre = {
  categoryId: string;
  mainId: number;
  subId: number;
  mainName: string;
  subName: string;
  link: string;
};
