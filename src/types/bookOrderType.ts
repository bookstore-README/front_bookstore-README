interface BookOrderType {
  book: {
    productId: number;
    title: string;
    imageUrl?: string | null;
    price: number;
    authors: string[] | null;
  };
  order: {
    deliveryStatus: string;
    address: string;
  };
}

export type { BookOrderType };
