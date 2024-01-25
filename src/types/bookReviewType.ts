interface BookReviewType {
  book: {
    productId: number;
    title: string;
    imageUrl?: string | null;
    authors: string[] | null;
  };
  review: {
    reviewId: number;
    createdAt: string;
    updatedAt: string;
    reviewTitle: string;
    reviewImgUrl?: string | null;
    reviewContent: string;
    reviewRating: number;
  };
}

export type { BookReviewType };
