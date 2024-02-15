import { useGetBook } from '@/api/book';
import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import useGetCategoryId from '@/hooks/useGetCategoryId';
import { useInitialBestNewestParams } from '@/hooks/useInitialParams';
import { LocatedCategoryAtom } from '@/store/state';
import { BookData } from '@/types/api/book';
import { useAtom } from 'jotai';

const INITIAL_PARAMS = useInitialBestNewestParams({ sort: 'BESTSELLER' });

function BestSellerPage() {
  const [locatedCategory] = useAtom(LocatedCategoryAtom);

  const mainId = locatedCategory.mainId;
  const subId = locatedCategory?.subId;
  const categotyId = useGetCategoryId(mainId, subId as number);

  const { data: book } = useGetBook({
    endpoint: `${categotyId}/sub`,
    params: INITIAL_PARAMS,
  });
  const bookData: BookData[] = book?.data?.books ?? [];

  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        sideBar={<Sidebar pageName="bestseller" />}
        main={<BookOverViewCardList bookData={bookData} title="베스트셀러" />}
      />
    </div>
  );
}

export default BestSellerPage;
