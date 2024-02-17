export type NewBook = {
  bookId?: number;
  bookImgUrl: string;
  bookTitle: string;
  authors: string[];
};

export type ResponSive = {
  desktop: Desktop;
  tablet: Tablet;
  mobile: Mobile;
};

export interface Desktop {
  imageSize: ImageSize;
}

export interface Tablet {
  imageSize: ImageSize;
}

export interface Mobile {
  imageSize: ImageSize;
}

export interface ImageSize {
  width: number;
  height: number;
}

export type EnvType = 'desktop' | 'tablet' | 'mobile';
