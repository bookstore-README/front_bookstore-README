import { useQueryClient  } from "@tanstack/react-query";
import { useState } from "react";

import { useDeleteBookmark, usePostBookmark } from "@/api/bookmark";

function useClickLikeButton({ bookId = "-1", bookmarkId = -1, isBookmarked = false }) {

  // 옵티미스틱 상태
  const [bookmarkState, setBookmarkState] = useState(isBookmarked);
  const queryClient = useQueryClient();

  // 북마크하는 함수
  const { mutate: handleCheckBookmarkMutate, isPending } = usePostBookmark(
    Number(bookId),
    {
    onMutate: () => {
      queryClient.cancelQueries();
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark', String(bookId)] });
    },
  });
  
  // 북마크 삭제하는 함수
  const { mutate: handleRemoveBookmarkMutate } = useDeleteBookmark({
    bookmarkId: String(bookmarkId),
    onMutate: () => {
      queryClient.cancelQueries();
    },
    onSettle: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark', String(bookId)] });
    },
  });

  const handleBookmarkClick = () => {
    if (isPending) return;

    setBookmarkState(!isBookmarked);
    if (isBookmarked) {
      handleRemoveBookmarkMutate();
    } else {
      handleCheckBookmarkMutate();
    }
  }

  return { bookmarkState, handleBookmarkClick };
}

export default useClickLikeButton