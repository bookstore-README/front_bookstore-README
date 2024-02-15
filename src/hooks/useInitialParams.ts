import { SortType } from '@/types/api/book';
const INITIAL_LIMIT = '100';
const INITIAL_ASCENDING = false;

const useInitialBestNewestParams = ({ sort }: SortType) => {
  const INITIAL_PARAMS = {
    limit: INITIAL_LIMIT,
    sort: sort,
    ascending: INITIAL_ASCENDING,
  };
  return INITIAL_PARAMS;
};

export { useInitialBestNewestParams };
