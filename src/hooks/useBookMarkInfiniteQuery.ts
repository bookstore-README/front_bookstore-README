import { getBookMarkList } from '@/api/bookmark';
import { useInfiniteQuery } from '@tanstack/react-query';

const LIMIT = 8
function useBookMarkInfiniteQuery() {
    const {
    data,
    status,
    isError,    
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['bookMarkUserId'],
    queryFn: async ({ pageParam }) => {
      const result = await getBookMarkList(pageParam, LIMIT);
      return {
        ...result,
        pageParam: pageParam,
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.data.cursorId === -1 ? undefined : lastPage.pageParam + 1
    },
    initialPageParam: 0,
  })
  return (
      {
      data,
      isError,
      status,
      fetchNextPage,
      hasNextPage,
   }
  )
}

export default useBookMarkInfiniteQuery