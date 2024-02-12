import { CusTomBookType } from '@/types/customPageType'; 

export const filteredBooks = (preferredGenreList: CusTomBookType[]) => {
  const filteredPreferredGenreList = preferredGenreList.sort(function (a, b) {
    const standard1 = a.bookmarkCount - b.bookmarkCount;
    const standard2 = a.viewCount - b.viewCount;
    if (standard1 === 0 && standard2 === 0) {
      return a.bookTitle.localeCompare(b.bookTitle);
    }
    if (standard1 === 0 && standard2 !== 0) {
      return b.viewCount - a.viewCount;
    }
    return b.bookmarkCount - a.bookmarkCount;
  });
  return filteredPreferredGenreList;
};
