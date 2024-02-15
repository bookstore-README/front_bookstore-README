import { useGetBook } from '@/api/book';
import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { useInitialBestNewestParams } from '@/hooks/useInitialParams';
import { BookData } from '@/types/api/book';

const INITIAL_PARAMS = useInitialBestNewestParams({ sort: 'BESTSELLER' });

function BestSellerPage() {
  const { data } = useGetBook({ endpoint: '0/main', params: INITIAL_PARAMS });
  const bookData: BookData[] = data?.data?.books ?? [];

  return (
    <BestSellerPageLayout
      header={<Header isLoggedIn={true} />}
      sideBar={<Sidebar pageName="bestseller" />}
      main={<BookOverViewCardList title="베스트셀러" bookData={bookData} />}
    />
  );
}

export default BestSellerPage;
