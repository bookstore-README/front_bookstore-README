import { MyReviewType } from '@/types/bookReviewType';

export const myReviews: MyReviewType[] = Array.from({ length: 10 }).map(
  (_, index) => ({
    book: {
      bookId: index + 1,
      publishedAt: `2022-08-${index + 1}`,
      orderNum: index + 1,
      categoryList: ['문학', '소설'],
      title: `책 제목 ${index + 1}`,
      imageUrl: `https://image.aladin.co.kr/product/31770/43/cover/k242833108_1.jpg`,
      price: 15000 + index * 1000,
      authors: [`저자 ${index + 1}`, '하나더'],
      translator: `번역가 ${index + 1}`,
      publisher: `출판사 ${index + 1}`,
      views: 100 + index * 10,
      bookmarkNum: 10 + index,
      reviewNum: 5 + index,
      rating: 4.0,
      isBookmarked: index % 2 === 0,
    },
    review: {
      reviewId: index + 1,
      isOwner: true,
      createdAt: `2022-09-${index + 1}`,
      updatedAt: `2022-09-${index + 2}`,
      reviewBookImgUrl: `https://image.aladin.co.kr/product/32938/68/cover200/k472936042_1.jpg`,
      reviewProfileImg: `https://image.aladin.co.kr/img/bn/book/2023/03/230623_free_pc_wingBN.jpg`,
      userNickname: `사용자 ${index + 1}`,
      reviewContent: `리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 ${index + 1}`,
      reviewRating: 4.0,
    },
  }),
);
